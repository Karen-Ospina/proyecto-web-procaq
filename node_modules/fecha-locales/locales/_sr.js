(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: [
            'nedelja',
            'ponedeljak',
            'utorak',
            'sreda',
            'četvrtak',
            'petak',
            'subota'
        ],
        dayNamesShort: [
            'ned.',
            'pon.',
            'uto.',
            'sre.',
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
        window.fechaLocales['sr'] = locale;
    }
}());