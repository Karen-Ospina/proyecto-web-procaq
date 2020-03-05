(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        dayNamesShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        monthNames: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthNamesShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['hu'] = locale;
    }
}());