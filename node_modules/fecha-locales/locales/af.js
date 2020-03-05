(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
        },
        dayNames: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        dayNamesShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        monthNames: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthNamesShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['af'] = locale;
    }
}());