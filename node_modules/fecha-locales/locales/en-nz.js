(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            var b = number % 10, output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
        },
        dayNames: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        dayNamesShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        monthNames: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthNamesShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['en-nz'] = locale;
    }
}());