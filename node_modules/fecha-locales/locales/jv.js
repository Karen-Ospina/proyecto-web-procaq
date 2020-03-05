(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function DoFn(n) {
            return n;
        },
        dayNames: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        dayNamesShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        monthNames: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthNamesShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['jv'] = locale;
    }
}());