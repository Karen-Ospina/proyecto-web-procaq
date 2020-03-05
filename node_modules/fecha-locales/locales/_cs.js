(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        dayNamesShort: 'ne_po_út_st_čt_pá_so'.split('_'),
        monthNames: months,
        monthNamesShort: monthsShort
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['cs'] = locale;
    }
}());