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

//Definimos la variable para la tupla del pedido
var listaPedido = document.getElementById('listaPedido');

//Variable global para almacenar el id del pedido
var idPedido = "";

//Metodo para listar los pedidos almacenados en la BD

function listarPedidos() {
  listaPedido.innerHTML = "";
  db.collection("DatosDeCompra").get().then((querySnapshot) => {
      querySnapshot.forEach(async (doc) => {
          listaPedido.innerHTML += `
          <tr>

          <th scope="row">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Image placeholder" src="../img/portfolio/JabonReyUnLitro.jpg">
              </a>
              <div class="media-body">
                <span class="mb-0 text-sm">${doc.data().NombreProducto}</span>
              </div>
            </div>
          </th>

          <td>
             ${doc.data().Medida}
          </td>

          <td>
            <span class="badge badge-dot mr-4">
              <i class="bg-warning"></i> ${doc.data().Cantidad}
            </span>
          </td>

          <td>
             ${doc.data().ValorUnitario}
          </td>

          <td>
          ${doc.data().Aroma}
          </td>

          <td class="text-right">

            <button onclick="EliminarPedido('${doc.id}')" type="button" class="btn btn-danger">
              <svg id="i-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"
                fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path
                  d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
              </svg>
            </button>

          </td>
        </tr>
          `;
      });
  });
}

//Metodo para eliminar Noticas
function EliminarPedido(id) {
  
  var dato = db.collection("DatosDeCompra").doc(id).delete()
      .then(function() {
          console.log("Noticia Eliminada!");
          listarPedidos();
      }).catch(function(error) {
          console.error("Error: ", error);
      });

}

listarPedidos();
  
  