(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function DoFn(n) {
            return n;
        },
        dayNames: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        dayNamesShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        monthNames: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthNamesShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['id'] = locale;
    }
}());