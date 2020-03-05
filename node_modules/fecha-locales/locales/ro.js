(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function DoFn(n) {
            return n;
        },
        dayNames: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        dayNamesShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        monthNames: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthNamesShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['ro'] = locale;
    }
}());