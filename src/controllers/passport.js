const passport = require('passport');
const Strategy = require('passport-local').Strategy;
 
const pool = require('../database/database');
const helpers = require('./helper');

// ------------- Iniciar Sesion ------------
passport.use('local.signin', new Strategy({
    usernameField: 'nombre',
    passwordField: 'contrase', 
    passReqToCallback: true
}, async (req, nombre, contrase, done) => {
    const row = await pool.query('select * from usuario where nombre = ?', [nombre]);
    console.log(row.length);
    if (row.length > 0) {
        const user = row[0];
        console.log(user)
        const validaUser = await helpers.macthPassword(contrase, user.contrase);
        console.log(validaUser)
        if (validaUser) {
            console.log('entro')
            done(null, user);
        } else {
            console.log('no entro')
            done(null, false);
        }
    } else {
        console.log('no hizo')
        done(null, false);
    }
}));

// -------- Registrar un nombre ------------
passport.use('local.signup', new Strategy({
    usernameField: 'nombre',
    passwordField: 'contrase',
    passReqToCallback: true
}, async (req, nombre, contrase, done) => {
    let newUser = {
        nombre,
        contrase
    };
    console.log(newUser);
    newUser.contrase = await helpers.encryptPassword(contrase);
    //Guardamos Datos
    const result = await pool.query('insert into usuario set ?', newUser);
    newUser.id = result.insertId;
    console.log(newUser.id)
    return done(null, newUser);
}));

// ------ Codificar el Usuario --------
passport.serializeUser((user, done) => {
    done(null, user.id_usuario);
});

// ----- Descodificar el usuario ------
passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('select * from usuario where id_usuario = ?', [id]);
    done(null, rows[0]);
});
