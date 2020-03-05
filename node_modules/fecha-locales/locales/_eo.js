(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%da',
        dayNames: 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
        dayNamesShort: 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
        monthNames: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthNamesShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['eo'] = locale;
    }
}());