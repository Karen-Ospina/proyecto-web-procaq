(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function DoFn(n) {
            return n;
        },
        dayNames: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        dayNamesShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        monthNames: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthNamesShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['sw'] = locale;
    }
}());