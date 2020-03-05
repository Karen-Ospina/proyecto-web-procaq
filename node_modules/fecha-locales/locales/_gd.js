(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
            return number + output;
        },
        dayNames: weekdays,
        dayNamesShort: weekdaysShort,
        monthNames: months,
        monthNamesShort: monthsShort
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['gd'] = locale;
    }
}());