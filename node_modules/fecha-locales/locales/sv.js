(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            var b = number % 10, output = ~~(number % 100 / 10) === 1 ? 'e' : b === 1 ? 'a' : b === 2 ? 'a' : b === 3 ? 'e' : 'e';
            return number + output;
        },
        dayNames: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        dayNamesShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        monthNames: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthNamesShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['sv'] = locale;
    }
}());