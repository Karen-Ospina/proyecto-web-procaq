const esprima = require('esprima');
const estraverse = require('estraverse');
const estemplate = require('estemplate');
const escodegen = require('escodegen');

module.exports = (momentLocale, name) => {
    const momentLocaleAst = esprima.parse(momentLocale);
    const fechaLocaleTemplate = `(function () {
      var locale = {
        amPm: <%= amPm %>,
        DoFn: <%= DoFn %>,
        dayNames: <%= dayNames %>,
        dayNamesShort: <%= dayNamesShort %>,
        monthNames: <%= monthNames %>,
        monthNamesShort: <%= monthNamesShort %>
      };

      if (typeof module !== 'undefined' && typeof module.exports === 'object') {
          module.exports = locale;
      } else if (window && window.window === window) {
          window.fechaLocales = window.fechaLocales || {};
          window.fechaLocales['${name}'] = locale;
      }
    })();
`;
    const templateProps = {
        amPm: esprima.parse('["am", "pm"]').body[0].expression
    };

    var hasError = false;
    const responsiblyGetNodeValue = (node, type, fechaName) => {
        if (node.value.type !== type) {
            try {
                var fixingCodeStr;
                
                const fixingCode = require('./fixers/' + name)[fechaName];

                if (typeof fixingCode === 'string') {
                    fixingCodeStr = fixingCode;
                } else if (typeof fixingCode === 'function') {
                    fixingCodeStr = fixingCode.toString();
                } else {
                    fixingCodeStr = JSON.stringify(fixingCode);
                }

                const fixingAst = esprima.parse(fixingCodeStr).body[0];

                if (fixingAst) {
                    if (fixingAst.expression) {
                        return fixingAst.expression;                        
                    }
                    return fixingAst;
                } else {
                    throw new Error('InvalidFixingAst: ' + fixingAst);
                }                
            } catch(e) {
                console.warn(`Invalid value for \`${fechaName}\` of "${name}.js". Please fix it manually.`);

                if (process.env.DEBUG) {
                    console.error('Error while fixing: ', e);
                }

                hasError = true;
            }
        }

        return node.value;
    };

    estraverse.traverse(momentLocaleAst, {
        enter: (node) => {
            if (node.type === 'Property') {
                switch (node.key.name) {
                case 'ordinal':
                    templateProps.DoFn = responsiblyGetNodeValue(node, 'FunctionExpression', 'DoFn');
                    break;
                case 'months':
                    templateProps.monthNames = responsiblyGetNodeValue(node, 'CallExpression', 'monthNames');
                    break;
                case 'weekdays':
                    templateProps.dayNames = responsiblyGetNodeValue(node, 'CallExpression', 'dayNames');
                    break;
                case 'weekdaysShort':
                    templateProps.dayNamesShort = responsiblyGetNodeValue(node, 'CallExpression', 'weekdaysShort');
                    break;
                case 'monthsShort':
                    templateProps.monthNamesShort = responsiblyGetNodeValue(node, 'CallExpression', 'monthsShort');
                    break;
                }
            }
        }
    });

    if (typeof templateProps.DoFn === 'undefined') {
        templateProps.DoFn = esprima.parse('function DoFn(n) { return n; };').body[0];
    }

    const fechaLocaleAst = estemplate(fechaLocaleTemplate, templateProps);

    const fechaLocale = escodegen.generate(fechaLocaleAst);

    return {
        locale: fechaLocale,
        hasError: hasError
    };
};
