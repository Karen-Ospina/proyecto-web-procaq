(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function DoFn(n) {
            return n;
        },
        dayNames: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        dayNamesShort: 'א\u05F3_ב\u05F3_ג\u05F3_ד\u05F3_ה\u05F3_ו\u05F3_ש\u05F3'.split('_'),
        monthNames: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthNamesShort: 'ינו\u05F3_פבר\u05F3_מרץ_אפר\u05F3_מאי_יוני_יולי_אוג\u05F3_ספט\u05F3_אוק\u05F3_נוב\u05F3_דצמ\u05F3'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['he'] = locale;
    }
}());