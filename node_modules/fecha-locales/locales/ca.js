(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number, period) {
            var output = number === 1 ? 'r' : number === 2 ? 'n' : number === 3 ? 'r' : number === 4 ? 't' : 'è';
            if (period === 'w' || period === 'W') {
                output = 'a';
            }
            return number + output;
        },
        dayNames: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        dayNamesShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        monthNames: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
        monthNamesShort: 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['ca'] = locale;
    }
}());