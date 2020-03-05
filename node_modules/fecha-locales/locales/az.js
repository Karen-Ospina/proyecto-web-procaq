(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            if (number === 0) {
                return number + '-ıncı';
            }
            var a = number % 10, b = number % 100 - a, c = number >= 100 ? 100 : null;
            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        dayNames: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        dayNamesShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        monthNames: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthNamesShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['az'] = locale;
    }
}());