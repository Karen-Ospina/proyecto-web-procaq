const fecha = require('fecha');

const tbody = document.getElementById('dates');
const formats = [
    'dddd MMMM Do, YYYY',
    'mediumDate',
    'hh:mm A'
];
const date = new Date();
const locales = {
    'en-au': require('fecha-locales/locales/en-au'),
    'fr': require('fecha-locales/locales/fr'),
    'es': require('fecha-locales/locales/es')
};

console.warn('Locales', locales);

const headRow = (() => {
    let row = '<tr>';
    row += '<th>locale</th>';

    formats.forEach((format) => row += '<th>' + format + '</th>');

    row += '</tr>';
    return row;
})();

const localeRows = Object.keys(locales).map((locale) => {
    fecha.i18n = locales[locale];

    let row = '<tr>';
    row += '<td>' + locale + '</td>';

    formats.forEach((format) => {
        row += '<td>' + fecha.format(date, format) + '</td>';
    });

    row += '</tr>';

    return row;
}).join('\n');

tbody.innerHTML = headRow + localeRows;
