(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        dayNamesShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        monthNames: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthNamesShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['sl'] = locale;
    }
}());