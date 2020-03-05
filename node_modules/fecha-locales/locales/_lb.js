(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        dayNamesShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        monthNames: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthNamesShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['lb'] = locale;
    }
}());