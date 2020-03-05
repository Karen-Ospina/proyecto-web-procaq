(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            return number + (number === 1 ? 'er' : 'e');
        },
        dayNames: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        dayNamesShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        monthNames: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthNamesShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['fr-ch'] = locale;
    }
}());