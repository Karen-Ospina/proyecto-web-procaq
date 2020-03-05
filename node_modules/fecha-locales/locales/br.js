(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            var output = number === 1 ? 'añ' : 'vet';
            return number + output;
        },
        dayNames: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
        dayNamesShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        monthNames: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthNamesShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['br'] = locale;
    }
}());