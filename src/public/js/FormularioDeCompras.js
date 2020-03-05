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


//                      DATOS DE LA COMPRA DEL CLIENTE

var NombreCliente = document.getElementById('Nombre_Cliente');
var ApellidosCliente = document.getElementById('Apellidos');
var CorreoCliente = document.getElementById('Correo_Cliente');
var DireccionCliente = document.getElementById('Direccion_Cliente');
var CiudadCliente = document.getElementById('Ciudad_Cliente');
var DepartamentoCliente; 
var TelefonoCliente = document.getElementById('Telefono_Cliente');

function ShowSelected()
{
  var EleccionDepartamento =  document.getElementById("Departamento_Cliente");
  DepartamentoCliente = EleccionDepartamento.options[EleccionDepartamento.selectedIndex].text;

}

//Metodo para almacenar la informacion en la BD. Evento del boton guardar
function guardarDatosDelCliente() {
  
    db.collection("DatosDeUsuario").add({
        Apellido: ApellidosCliente.value,
        Ciudad: CiudadCliente.value,
        Departamento: DepartamentoCliente,
        Direccion: DireccionCliente.value,
        Email: CorreoCliente.value,
        Nombres: NombreCliente.value,
        Telefono: TelefonoCliente.value
    })

        .then(function (docRef) {
            console.log("Pedido hecho: ", docRef.id);
            
        })
        .catch(function (error) {
            console.error("Error: ", error);
        });

}
