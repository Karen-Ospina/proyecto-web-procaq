function irpagina(r) {
    if (r == 'ubicacion') {
        window.location = 'vistas/ubicacion.html';
    }
}

function loggeo() {
    var doc = document.getElementById('documento');
    var pass = document.getElementById('password');
    console.log(doc.value);
    if (doc.value == "1" && pass.value == "admin") {
        window.location.href = '../vistas/inicio.html';
    } else { alert('Documento o contraseña incorrectos\nPista: doc=1 Y pass=admin'); }
}

function deshabilitaRetroceso(){
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button" //chrome
    window.onhashchange=function(){window.location.hash="no-back-button";}
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })