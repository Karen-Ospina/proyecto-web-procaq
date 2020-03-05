(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function DoFn(n) {
            return n;
        },
        dayNames: 'གཟའ\u0F0Bཉི\u0F0Bམ\u0F0B_གཟའ\u0F0Bཟླ\u0F0Bབ\u0F0B_གཟའ\u0F0Bམིག\u0F0Bདམར\u0F0B_གཟའ\u0F0Bལྷག\u0F0Bཔ\u0F0B_གཟའ\u0F0Bཕུར\u0F0Bབུ_གཟའ\u0F0Bཔ\u0F0Bསངས\u0F0B_གཟའ\u0F0Bསྤེན\u0F0Bཔ\u0F0B'.split('_'),
        dayNamesShort: 'ཉི\u0F0Bམ\u0F0B_ཟླ\u0F0Bབ\u0F0B_མིག\u0F0Bདམར\u0F0B_ལྷག\u0F0Bཔ\u0F0B_ཕུར\u0F0Bབུ_པ\u0F0Bསངས\u0F0B_སྤེན\u0F0Bཔ\u0F0B'.split('_'),
        monthNames: 'ཟླ\u0F0Bབ\u0F0Bདང\u0F0Bཔོ_ཟླ\u0F0Bབ\u0F0Bགཉིས\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bགསུམ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཞི\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bལྔ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདྲུག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབདུན\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབརྒྱད\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདགུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཅིག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཉིས\u0F0Bཔ'.split('_'),
        monthNamesShort: 'ཟླ\u0F0Bབ\u0F0Bདང\u0F0Bཔོ_ཟླ\u0F0Bབ\u0F0Bགཉིས\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bགསུམ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཞི\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bལྔ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདྲུག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབདུན\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབརྒྱད\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདགུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཅིག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཉིས\u0F0Bཔ'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['bo'] = locale;
    }
}());