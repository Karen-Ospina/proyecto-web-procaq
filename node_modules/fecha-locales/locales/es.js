(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            return number + 'º';
        },
        dayNames: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        dayNamesShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        monthNames: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthNamesShort: [
            'enero',
            'feb.',
            'marzo',
            'abr.',
            'mayo',
            'jun.',
            'jul.',
            'agosto',
            'sept.',
            'oct.',
            'nov.',
            'dic.'
        ]
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['es'] = locale;
    }
}());
