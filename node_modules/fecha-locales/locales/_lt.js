(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            return number + '-oji';
        },
        dayNames: {
            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
            isFormat: /dddd HH:mm/
        },
        dayNamesShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        monthNames: {
            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_')
        },
        monthNamesShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['lt'] = locale;
    }
}());