(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d일',
        dayNames: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        dayNamesShort: '일_월_화_수_목_금_토'.split('_'),
        monthNames: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthNamesShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['ko'] = locale;
    }
}());