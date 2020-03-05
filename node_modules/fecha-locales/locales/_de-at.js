(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        dayNamesShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        monthNames: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthNamesShort: 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['de-at'] = locale;
    }
}());