const session = require('express-session');
const pool = require('../database/database');
const modelo = {};


let objPaciente = {
    rt_paciente: '/FormularioCompras/crear',
}

modelo.genero = async(req, res) => {
    await pool.query("select * from genero", (err, cosul) => {
        if (err) {
            console.log(err);
        } else {
            res.render('FormularioCompras.html', {
                gener: cosul,
                ruta_Paciente: objPaciente.rt_paciente,
            });
        }
    });
}

modelo.factura = async(req, res) => {
    await pool.query("select * from genero", (err, cosul) => {
        if (err) {
            console.log(err);
        } else {
            res.render('FormularioCompras.html', {
                gener: cosul,
                ruta_Paciente: objPaciente.rt_paciente,
            });
        }
    });
}

modelo.crearUsuario = async(req, res) => {
    var informacion = {
        Nombre1: req.body.Nombre_1,
        Nombre2: req.body.Nombre_2,
        Apellido1: req.body.Apellido_1,
        Apellido2: req.body.Apellido_2,
        telefono: req.body.telefono,
        correo: req.body.Correo_Cliente,
        Id_idgenero: req.body.Genero_usuario,
    };

    await pool.query("INSERT INTO usuario set ?", [informacion], (err, result) => {
        if (err) {
            console.log(err)
            res.redirect('/PedidoCarrito');
        } else {
            console.log(result)
            res.redirect('/PedidoCarrito');
        }
    });
};
module.exports = modelo;