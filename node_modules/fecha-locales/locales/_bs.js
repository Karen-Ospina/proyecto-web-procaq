(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        dayNamesShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        monthNames: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthNamesShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['bs'] = locale;
    }
}());