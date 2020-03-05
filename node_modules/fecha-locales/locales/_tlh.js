(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        dayNamesShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        monthNames: 'tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019'.split('_'),
        monthNamesShort: 'jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['tlh'] = locale;
    }
}());