(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        dayNamesShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        monthNames: {
            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
        },
        monthNamesShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['hr'] = locale;
    }
}());