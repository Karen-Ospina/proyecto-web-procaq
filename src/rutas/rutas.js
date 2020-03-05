const express = require("express");
const rutas = express.Router();

const pool = require("../database/database");
const fileUpload = require("express-fileupload");
const passport = require("passport");
const controlinforme = require("../model/formulario");
const pdf = require("pdfkit");

// ---- Carga Vista Principal ------
rutas.get("/", (req, res) => {
  res.render("index.html");
});

rutas.get("/ubicacion", (req, res) => {
  res.render("ubicacion.html");
});

let producto = {
  id_producto: "",
  medida: "",
  unidades: ""
};

rutas.get("/abaut", async (req, res) => {
  const producto = await pool.query("Select * from producto");
  res.render("Categoria1.html", { producto });
});

//Metodo para recibir informacion de la compra
rutas.post("/comprar", async (req, res) => {
  producto = {
    id_producto: req.body.IdProducto,
    medida: req.body.Medida,
    unidades: req.body.Cantidad
  };
  res.redirect("/Pedido");
});

//Variables para los datos del pedido
let valortotal = "";
let uni = "";
let produc = "";

//Metodo para cargar la vista de venta
rutas.get("/Pedido", async (req, res) => {
  produc = await pool.query(
    "SELECT producto.Nombre, producto.Ruta_Imagen, categoria.Nombre AS Categoria, producto_presentacion.precio_unitario AS precio, presentacion.nombre AS Presentacion FROM producto INNER JOIN categoria ON categoria.id_categoria=producto.Id_idcategoria INNER JOIN producto_presentacion ON producto_presentacion.id_idproducto = producto.id_Producto INNER JOIN presentacion ON presentacion.id_presentacion = producto_presentacion.id_idpresentacion WHERE producto.id_Producto = " +
      producto.id_producto +
      " AND presentacion.id_presentacion = " +
      producto.medida
  );
  uni = producto.unidades;
  valortotal = uni * produc[0].precio;
  console.log(produc);
  console.log(valortotal);

  res.render("PedidoCarrito.html", {
    produc,
    uni,
    valortotal
  });
});

//Metodo donde se carga los productos de manera dinamica
rutas.get("/Categoria1", async (req, res) => {
  let productos = await pool.query(
    "SELECT DISTINCT producto.id_Producto AS ID, producto.Nombre AS Nombre, producto.Ruta_Imagen AS Ruta, categoria.Nombre as categoria from producto inner join categoria on categoria.id_categoria=producto.Id_idcategoria "
  );
  let medidas = await pool.query("SELECT * FROM presentacion");

  res.render("Categoria1.html", { productos, medidas });
});

//Metodo para cargar la vista de inventario
rutas.get("/inventario", (req, res) => {
  res.render("inventario.html");
});

//Variables para los datos del usuario
let nombreusuario = "";
let cedulausuario = "";
let telefonousuario = "";

//Funcion para iniciar el proceso de pdf
rutas.post("/factura", async (req, res) => {
  nombreusuario = req.body.nombre;
  cedulausuario = req.body.cedula;
  telefonousuario = req.body.telefono;

  CrearPDF(req, res);
});

//Funcion para crear un pdf
function CrearPDF(req, res) {
  var date = Fecha();
  var imgempre = "src/public/img/Fondo-Head.png";
  var doc = new pdf();

  var line =
    "___________________________________________________________________________________________________";
  doc.image(imgempre, 50, 40, { width: 150, height: 50 });

  doc.fontSize(11).text("FACTURA # 1", 40, 100, { width: 200, align: "left" });
  doc.fontSize(11).text(date, 40, 110, { width: 200, align: "left" });

  doc.fontSize(9);
  doc.text("ProCaq", 340, 45, { width: 200, align: "right" });
  doc.text("40092205-02", 340, 55, { width: 200, align: "right" });
  doc.text("Cll 17 #13A-35", 340, 65, { width: 200, align: "right" });
  doc.text("3125291743", 340, 75, { width: 200, align: "right" });
  doc.text("kar.ospina@udla.edu.co", 340, 85, { width: 200, align: "right" });

  doc.text("DATOS DEL CLIENTE", 40, 125, { align: "center" });
  doc.text(line, 40, 128);

  doc.text("NOMBRE: " + nombreusuario, 70, 145, { width: 200 });
  doc.text("|  DOCUMENTO: " + cedulausuario, 260, 145, { width: 200 });
  doc.text("|  TELEFONO: " + telefonousuario, 390, 145, { width: 200 });

  doc.text("DATOS DEL PRODUCTO", 40, 170, { align: "center" });
  doc.text(line, 40, 173);

  doc.text("UNIDAD", 40, 185, { width: 200 });
  doc.text("|                 PRODUCTO", 90, 185, { width: 200 });
  doc.text("|                                DESCRIPCION", 230, 185, {
    width: 300
  });
  doc.text("|    VALOR", 470, 185, { width: 200 });
  doc.text(line, 40, 187);

  doc.text(uni + "      |", 70, 205, { width: 200 });
  doc.text(produc[0].Nombre, 85, 205, { width: 150, align: "center" });
  doc.text("| " + produc[0].Categoria, 230, 205, { width: 260 });
  doc.text("|       $" + produc[0].precio, 470, 205, { width: 200 });

  doc.text(line, 40, 248);
  doc.text("NUESTROS PRODUCTOS SIEMPRE SON DE MAXIMA CALIDAD", 40, 273, {
    width: 300
  });
  doc.text("VALOR TOTAL  :", 425, 260, { width: 150 });
  doc.text(valortotal, 500, 260, { width: 150 });

  doc
    .fontSize(8)
    .text("Sistema desarrollado por Karen Daniela y jhonier Alexis", 40, 330, {
      width: 300
    });
  doc.end();

  doc.pipe(res);
}

//Funcion para sacar la hora del sistema
function Fecha() {
  var fecha = new Date();
  var dia = "",
    mes = "",
    año = "";

  dia = fecha.getDate();
  mes = fecha.getMonth();
  año = fecha.getFullYear();

  var fr = año + "-" + mes + "-" + dia;

  return fr;
}
module.exports = rutas;
