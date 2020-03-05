(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        dayNamesShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
        monthNames: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthNamesShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['nn'] = locale;
    }
}());