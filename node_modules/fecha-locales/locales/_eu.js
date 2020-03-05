(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%d.',
        dayNames: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        dayNamesShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
        monthNames: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthNamesShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['eu'] = locale;
    }
}());