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
            case 'M':
                return number + '月';
            case 'w':
            case 'W':
                return number + '周';
            default:
                return number;
            }
        },
        dayNames: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        dayNamesShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        monthNames: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthNamesShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['zh-cn'] = locale;
    }
}());