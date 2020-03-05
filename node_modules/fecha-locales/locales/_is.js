(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        dayNamesShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        monthNames: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthNamesShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['is'] = locale;
    }
}());