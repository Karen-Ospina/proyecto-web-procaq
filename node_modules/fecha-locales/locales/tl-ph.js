(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            return number;
        },
        dayNames: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        dayNamesShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        monthNames: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthNamesShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['tl-ph'] = locale;
    }
}());