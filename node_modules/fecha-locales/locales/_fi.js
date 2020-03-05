(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        dayNamesShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        monthNames: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthNamesShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['fi'] = locale;
    }
}());