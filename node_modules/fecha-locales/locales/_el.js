(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%dη',
        dayNames: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        dayNamesShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        monthNames: function (momentToFormat, format) {
            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) {
                return this._monthsGenitiveEl[momentToFormat.month()];
            } else {
                return this._monthsNominativeEl[momentToFormat.month()];
            }
        },
        monthNamesShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['el'] = locale;
    }
}());