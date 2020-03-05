(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
        dayNamesShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
        monthNames: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
        monthNamesShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['sq'] = locale;
    }
}());