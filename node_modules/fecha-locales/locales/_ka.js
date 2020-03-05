(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            if (number === 0) {
                return number;
            }
            if (number === 1) {
                return number + '-ლი';
            }
            if (number < 20 || number <= 100 && number % 20 === 0 || number % 100 === 0) {
                return 'მე-' + number;
            }
            return number + '-ე';
        },
        dayNames: {
            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
            isFormat: /(წინა|შემდეგ)/
        },
        dayNamesShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        monthNames: {
            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
        },
        monthNamesShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['ka'] = locale;
    }
}());