(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
        dayNamesShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
        monthNames: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
        monthNamesShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['se'] = locale;
    }
}());