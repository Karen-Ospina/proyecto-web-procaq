(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        dayNamesShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        monthNames: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthNamesShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['da'] = locale;
    }
}());