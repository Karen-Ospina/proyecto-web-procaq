(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number, period) {
            switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + '日';
            default:
                return number;
            }
        },
        dayNames: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        dayNamesShort: '日_月_火_水_木_金_土'.split('_'),
        monthNames: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        monthNamesShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['ja'] = locale;
    }
}());