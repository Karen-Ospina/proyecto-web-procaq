(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            if (number === 0) {
                return number + '\'ıncı';
            }
            var a = number % 10, b = number % 100 - a, c = number >= 100 ? 100 : null;
            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        dayNames: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        dayNamesShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        monthNames: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthNamesShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['tr'] = locale;
    }
}());