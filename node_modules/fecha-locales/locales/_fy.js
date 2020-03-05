(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
        },
        dayNames: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        dayNamesShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
        monthNames: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
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
        window.fechaLocales['fy'] = locale;
    }
}());