(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        dayNamesShort: 'P_E_T_K_N_R_L'.split('_'),
        monthNames: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthNamesShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['et'] = locale;
    }
}());