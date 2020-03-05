const fs = require('fs');
const path = require('path');
const glob = require('glob');
const convertMomentLocaleToFechaLocale = require('./convertMomentLocaleToFechaLocale');

const momentLocalesPath = path.resolve(__dirname, './moment-locales');
const fechaLocalesPath = path.resolve(__dirname, '../locales');

const clean = (cb) => {
    glob(fechaLocalesPath + '/*.js', (err, files) => {
        if (err) throw err;

        const totalFiles = files.length;

        if (!totalFiles) {
            cb();
        }

        files.forEach((file, index) => {
            fs.unlink(file, (err) => {
                if (err) {
                    throw err;
                }
                if (index === totalFiles - 1) {
                    cb();
                }
            });
        });
    });
};

clean(() => {
    fs.readdir(momentLocalesPath, (err, files) => {
        if (err) {
            console.error('Erorr while reading moment-locales');
            throw err;
        }

        files.forEach((localeFile) => {
            fs.readFile(path.resolve(momentLocalesPath, localeFile), 'utf-8', (err, momentLocale) => {
                if (err) {
                    console.error('Error while reading moment-locale file', localeFile);
                    throw err;
                }

                var fechaLocale,
                    hasError;

                const conversionResult = convertMomentLocaleToFechaLocale(momentLocale, localeFile.split('.')[0]);
                fechaLocale = conversionResult.locale;
                hasError = conversionResult.hasError;

                if (hasError) {
                    localeFile = `_${localeFile}`;
                }

                fs.writeFile(path.resolve(fechaLocalesPath, localeFile), fechaLocale, 'utf-8', (err) => {
                    if (err) {
                        console.error('Error while writing fecha locale', localeFile);
                        throw err;
                    }
                });
            });
        });
    });
});
