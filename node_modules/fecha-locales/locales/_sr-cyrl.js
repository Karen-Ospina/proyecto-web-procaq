(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: [
            'недеља',
            'понедељак',
            'уторак',
            'среда',
            'четвртак',
            'петак',
            'субота'
        ],
        dayNamesShort: [
            'нед.',
            'пон.',
            'уто.',
            'сре.',
            'чет.',
            'пет.',
            'суб.'
        ],
        monthNames: [
            'јануар',
            'фебруар',
            'март',
            'април',
            'мај',
            'јун',
            'јул',
            'август',
            'септембар',
            'октобар',
            'новембар',
            'децембар'
        ],
        monthNamesShort: [
            'јан.',
            'феб.',
            'мар.',
            'апр.',
            'мај',
            'јун',
            'јул',
            'авг.',
            'сеп.',
            'окт.',
            'нов.',
            'дец.'
        ]
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['sr-cyrl'] = locale;
    }
}());