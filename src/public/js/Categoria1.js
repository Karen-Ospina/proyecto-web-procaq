  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDMO40FNuUQl-sfTsORBdc9HWEKe9lHnN0",
    authDomain: "procaq-ec743.firebaseapp.com",
    databaseURL: "https://procaq-ec743.firebaseio.com",
    projectId: "procaq-ec743",
    storageBucket: "procaq-ec743.appspot.com",
    messagingSenderId: "327502230754",
    appId: "1:327502230754:web:33e337f375ccdceb441abb",
    measurementId: "G-2EZJQK0832"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Variable para acceder a metodos de firestore
var db = firebase.firestore();


//                                   SUAVISANTES

//Definimos variables para las etiketas H
var NombreSuavisante1 = document.getElementById('NombreSuavisante');
var PrecioSuavisante1;

//Definimos la variable para el select de medidas y aromas
var medida;
var aroma;

//Definimos la variable para el input de cantidad
var CantidadSuavisante1 = document.getElementById('CantidadSuavisante1');

//Metodos para los select de unidad y aroma
function ShowSelected1()
{
  var MedidaSuavisante1 = document.getElementById("MedidaSuavisante");
  medida = MedidaSuavisante1.options[MedidaSuavisante1.selectedIndex].text;
  
  if (medida == "Un litro" ){
    
    PrecioSuavisante1=3500;
    alert("que pasó");
  }else if (medida == "Dos litros" ){
    PrecioSuavisante1=13500;
  }else if (medida== "Galon" ){
    PrecioSuavisante1=20500;
  }else if (medida == "Garrafa" ){
    PrecioSuavisante1=50000;
  }else if (medida == "Medio litro" ){
    PrecioSuavisante1=2500;
  }
}

function ShowSelected2()
{
  var AromaSuavisante1 = document.getElementById("AromaSuavisante1litro");
  aroma = AromaSuavisante1.options[AromaSuavisante1.selectedIndex].text;
  
}

//Metodo para almacenar la informacion en la BD. Evento del boton guardar
function guardarPedido() {
  
    db.collection("DatosDeCompra").add({
        ValorUnitario: PrecioSuavisante1,
        Medida: medida,
        NombreProducto: NombreSuavisante1.innerHTML,
        Aroma: aroma,
        Cantidad: CantidadSuavisante1.value
    })

        .then(function (docRef) {
            console.log("Pedido hecho: ", docRef.id);
            
        })
        .catch(function (error) {
            console.error("Error: ", error);
        });

}



//                                           AMBIENTADORES


//Definimos variables para las etiketas H
var Nombre = document.getElementById('NombreAmbientador');
var Precio;

//Definimos la variable para el select de medidas y aromas
var medida;
var aroma;

//Definimos la variable para el input de cantidad
var CantidadAmbientador = document.getElementById('CantidadAmbientador');

//Metodos para los select de unidad y aroma
function ShowSelected3()
{
  var MedidaAmbientador = document.getElementById("MedidaAmbientador");
  medida = MedidaAmbientador.options[MedidaAmbientador.selectedIndex].text;
  
  if (medida == "Un litro" ){
    
    Precio=3500;
    
  }else if (medida == "Dos litros" ){
    Precio=13500;
  }else if (medida== "Galon" ){
    Precio=20500;
  }else if (medida == "Garrafa" ){
    Precio=50000;
  }else if (medida == "Medio litro" ){
    Precio=2500;
  }
}

function ShowSelected4()
{
  var AromaAmbientador = document.getElementById("AromaAmbientador");
  aroma = AromaAmbientador.options[AromaAmbientador.selectedIndex].text;
  
}

//Metodo para almacenar la informacion en la BD. Evento del boton guardar
function guardarPedido2() {
  
    db.collection("DatosDeCompra").add({
        ValorUnitario: Precio,
        Medida: medida,
        NombreProducto: NombreAmbientador.innerHTML,
        Aroma: aroma,
        Cantidad: CantidadAmbientador.value
    })

        .then(function (docRef) {
            console.log("Pedido hecho: ", docRef.id);
            
        })
        .catch(function (error) {
            console.error("Error: ", error);
        });

}


//                    JABÓN PARA MANOS



//Definimos variables para las etiketas H
var NombreJabonManos = document.getElementById('NombreJabonManos');
var Precio;

//Definimos la variable para el select de medidas y aromas
var medida;
var aroma;

//Definimos la variable para el input de cantidad
var CantidadJabonManos = document.getElementById('CantidadJabonManos');

//Metodos para los select de unidad y aroma
function ShowSelected5()
{
  var MedidaJabonManos = document.getElementById("MedidaJabonManos");
  medida = MedidaJabonManos.options[MedidaJabonManos.selectedIndex].text;
  
  if (medida == "Un litro" ){
    Precio=3500;
    alert("KDNDJ");
  }else if (medida == "Medio litro" ){
    Precio=2500;
  }
}

function ShowSelected6()
{
  var AromaJabonManos = document.getElementById("AromaJabonManos");
  aroma = AromaJabonManos.options[AromaJabonManos.selectedIndex].text;
  
}

//Metodo para almacenar la informacion en la BD. Evento del boton guardar
function guardarPedido3() {
  
    db.collection("DatosDeCompra").add({
        ValorUnitario: Precio,
        Medida: medida,
        NombreProducto: NombreJabonManos.innerHTML,
        Aroma: aroma,
        Cantidad: CantidadJabonManos.value
    })

        .then(function (docRef) {
            console.log("Pedido hecho: ", docRef.id);
            
        })
        .catch(function (error) {
            console.error("Error: ", error);
        });

}


//                                  JABÓN ROPA DE COLOR
 
//Definimos variables para las etiketas H
var NombreJabonRopaColor = document.getElementById('NombreJabonRopaColor');
var PrecioJabonRopaColor;

//Definimos la variable para el select de medidas y aromas
var medida;
var aroma;

//Definimos la variable para el input de cantidad
var CantidadJabonRopaColor = document.getElementById('CantidadJabonRopaColor');

//Metodos para los select de unidad y aroma
function ShowSelected7()
{
  var MedidaJabonRopaColor = document.getElementById("MedidaJabonRopaColor");
  medida = MedidaJabonRopaColor.options[MedidaJabonRopaColor.selectedIndex].text;
  
  if (medida == "Un litro" ){
    
    PrecioJabonRopaColor=3500;
    
  }else if (medida == "Dos litros" ){
    PrecioJabonRopaColor=13500;

  }else if (medida == "Medio litro" ){
    PrecioJabonRopaColor=2500;
  }
}

function ShowSelected8()
{
  var AromaJabonRopaColor = document.getElementById("AromaJabonRopaColor");
  aroma = AromaJabonRopaColor.options[AromaJabonRopaColor.selectedIndex].text;
  
}

//Metodo para almacenar la informacion en la BD. Evento del boton guardar
function guardarPedido4() {
  
    db.collection("DatosDeCompra").add({
        ValorUnitario: PrecioJabonRopaColor,
        Medida: medida,
        NombreProducto: NombreJabonRopaColor.innerHTML,
        Aroma: aroma,
        Cantidad: CantidadJabonRopaColor.value
    })

        .then(function (docRef) {
            console.log("Pedido hecho: ", docRef.id);
            
        })
        .catch(function (error) {
            console.error("Error: ", error);
        });

}


//                                  JABÓN REY

//Definimos variables para las etiketas H
var NombreJabonRey = document.getElementById('NombreJabonRey');
var PrecioJabonRey;

//Definimos la variable para el select de medidas y aromas
var medida;
var aroma;

//Definimos la variable para el input de cantidad
var CantidadJabonRey = document.getElementById('CantidadJabonRey');

//Metodos para los select de unidad y aroma
function ShowSelected9()
{
  var MedidaJabonRey = document.getElementById("MedidaJabonRey");
  medida = MedidaJabonRey.options[MedidaJabonRey.selectedIndex].text;
  
  if (medida == "Un litro" ){
    
    PrecioJabonRey=3500;

  }else if (medida == "Medio litro" ){
    PrecioJabonRey=2500;
  }
}

function ShowSelected10()
{
  var AromaJabonRey = document.getElementById("AromaJabonRey");
  aroma = AromaJabonRey.options[AromaJabonRey.selectedIndex].text;
  
}

//Metodo para almacenar la informacion en la BD. Evento del boton guardar
function guardarPedido5() {
  
    db.collection("DatosDeCompra").add({
        ValorUnitario: PrecioJabonRey,
        Medida: medida,
        NombreProducto: NombreJabonRey.innerHTML,
        Aroma: aroma,
        Cantidad: CantidadJabonRey.value
    })

        .then(function (docRef) {
            console.log("Pedido hecho: ", docRef.id);
            
        })
        .catch(function (error) {
            console.error("Error: ", error);
        });

}

//                               JABÓN PARA LAVADORA OXIGENADOS

//Definimos variables para las etiketas H
var NombreJabonLavadora = document.getElementById('NombreJabonLavadora');
var PrecioJabonLavadora;

//Definimos la variable para el select de medidas y aromas
var medida;
var aroma;

//Definimos la variable para el input de cantidad
var CantidadJabonLavadora = document.getElementById('CantidadJabonLavadora');

//Metodos para los select de unidad y aroma
function ShowSelected11()
{
  var MedidaJabonLavadora = document.getElementById("MedidaJabonLavadora");
  medida = MedidaJabonLavadora.options[MedidaJabonLavadora.selectedIndex].text;
  
  if (medida == "Un litro" ){
    
    PrecioJabonLavadora= 3500;
    
  }else if (medida == "Dos litros" ){
    PrecioJabonLavadora= 13500;

  }
}

function ShowSelected12()
{
  var AromaJabonLavadora = document.getElementById("AromaJabonLavadora");
  aroma = AromaJabonLavadora.options[AromaJabonLavadora.selectedIndex].text;
  
}

//Metodo para almacenar la informacion en la BD. Evento del boton guardar
function guardarPedido6() {
  
    db.collection("DatosDeCompra").add({
        ValorUnitario: PrecioJabonLavadora,
        Medida: medida,
        NombreProducto: NombreJabonLavadora.innerHTML,
        Aroma: aroma,
        Cantidad: CantidadJabonLavadora.value
    })

        .then(function (docRef) {
            console.log("Pedido hecho: ", docRef.id);
            
        })
        .catch(function (error) {
            console.error("Error: ", error);
        });

}