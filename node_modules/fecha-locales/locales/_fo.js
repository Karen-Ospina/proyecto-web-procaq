(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        dayNamesShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        monthNames: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthNamesShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['fo'] = locale;
    }
}());