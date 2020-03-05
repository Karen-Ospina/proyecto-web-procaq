(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        dayNamesShort: 'ne_po_ut_st_št_pi_so'.split('_'),
        monthNames: months,
        monthNamesShort: monthsShort
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['sk'] = locale;
    }
}());