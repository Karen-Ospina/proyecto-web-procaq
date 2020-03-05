const mysql = require('mysql');

const { database } = require('../keys');
const { promisify } = require('util');
const pool = mysql.createPool(database); 


pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('LA CONEXION A LA BASE DATOS SE PERDIO');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIONES')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('LA CONEXION FUE RECHASADA')
        }
    }

    if (connection) connection.release();
    console.log('BD Conectada');
    return;
});

pool.query = promisify(pool.query);
module.exports = pool;