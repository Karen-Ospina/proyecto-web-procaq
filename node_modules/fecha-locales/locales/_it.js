(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%dº',
        dayNames: 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
        dayNamesShort: 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
        monthNames: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthNamesShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['it'] = locale;
    }
}());