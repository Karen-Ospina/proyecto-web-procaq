(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        dayNamesShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
        monthNames: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthNamesShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['lv'] = locale;
    }
}());