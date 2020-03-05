(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        dayNamesShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        monthNames: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthNamesShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['nb'] = locale;
    }
}());