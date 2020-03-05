(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        dayNamesShort: 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
        monthNames: function (momentToFormat, format) {
            if (format === '') {
                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
            } else if (/D MMMM/.test(format)) {
                return monthsSubjective[momentToFormat.month()];
            } else {
                return monthsNominative[momentToFormat.month()];
            }
        },
        monthNamesShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['pl'] = locale;
    }
}());