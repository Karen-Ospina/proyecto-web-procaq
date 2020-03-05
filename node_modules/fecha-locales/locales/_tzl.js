(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
        dayNamesShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
        monthNames: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
        monthNamesShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['tzl'] = locale;
    }
}());