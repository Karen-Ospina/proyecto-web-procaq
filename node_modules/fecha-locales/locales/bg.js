(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            var lastDigit = number % 10, last2Digits = number % 100;
            if (number === 0) {
                return number + '-ев';
            } else if (last2Digits === 0) {
                return number + '-ен';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
            } else if (lastDigit === 1) {
                return number + '-ви';
            } else if (lastDigit === 2) {
                return number + '-ри';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
            } else {
                return number + '-ти';
            }
        },
        dayNames: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        dayNamesShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        monthNames: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthNamesShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['bg'] = locale;
    }
}());