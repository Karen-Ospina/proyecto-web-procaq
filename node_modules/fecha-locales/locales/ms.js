(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function DoFn(n) {
            return n;
        },
        dayNames: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        dayNamesShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        monthNames: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthNamesShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['ms'] = locale;
    }
}());