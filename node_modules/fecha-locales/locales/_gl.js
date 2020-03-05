(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%dº',
        dayNames: 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
        dayNamesShort: 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
        monthNames: 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
        monthNamesShort: 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['gl'] = locale;
    }
}());