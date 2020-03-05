(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: function (number) {
            var a = number % 10, b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        dayNames: 'Жексенбі_Дүйсенбі_Сейсенбі_Сәрсенбі_Бейсенбі_Жұма_Сенбі'.split('_'),
        dayNamesShort: 'Жек_Дүй_Сей_Сәр_Бей_Жұм_Сен'.split('_'),
        monthNames: 'Қаңтар_Ақпан_Наурыз_Сәуір_Мамыр_Маусым_Шілде_Тамыз_Қыркүйек_Қазан_Қараша_Желтоқсан'.split('_'),
        monthNamesShort: 'Қаң_Ақп_Нау_Сәу_Мам_Мау_Шіл_Там_Қыр_Қаз_Қар_Жел'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['kk'] = locale;
    }
}());