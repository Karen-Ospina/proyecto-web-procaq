(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function DoFn(n) {
            return n;
        },
        dayNames: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
        dayNamesShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
        monthNames: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthNamesShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['uz'] = locale;
    }
}());