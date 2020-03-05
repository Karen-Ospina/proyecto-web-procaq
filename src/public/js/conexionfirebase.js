const firebaseConfig = {
    apiKey: "AIzaSyDuN8mvtOB-Ew_BwVRtUiTrn5cK2shDGP4",
    authDomain: "proyecto-final-web-2019-372e3.firebaseapp.com",
    databaseURL: "https://proyecto-final-web-2019-372e3.firebaseio.com",
    projectId: "proyecto-final-web-2019-372e3",
    storageBucket: "proyecto-final-web-2019-372e3.appspot.com",
    messagingSenderId: "921645968849",
    appId: "1:921645968849:web:30a8654fefca42b8a944f0"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Variable para acceder a metodos de firestore
var db = firebase.firestore();

