(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
        },
        dayNames: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        dayNamesShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        monthNames: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthNamesShort: function (m, format) {
            if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        }
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['nl'] = locale;
    }
}());