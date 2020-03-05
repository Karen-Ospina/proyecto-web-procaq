(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: [
            'nedjelja',
            'ponedjeljak',
            'utorak',
            'srijeda',
            'četvrtak',
            'petak',
            'subota'
        ],
        dayNamesShort: [
            'ned.',
            'pon.',
            'uto.',
            'sri.',
            'čet.',
            'pet.',
            'sub.'
        ],
        monthNames: [
            'januar',
            'februar',
            'mart',
            'april',
            'maj',
            'jun',
            'jul',
            'avgust',
            'septembar',
            'oktobar',
            'novembar',
            'decembar'
        ],
        monthNamesShort: [
            'jan.',
            'feb.',
            'mar.',
            'apr.',
            'maj',
            'jun',
            'jul',
            'avg.',
            'sep.',
            'okt.',
            'nov.',
            'dec.'
        ]
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['me'] = locale;
    }
}());