const express = require("express"),
  path = require("path"),
  morgan = require("morgan"),
  session = require("express-session"),
  mysqlsession = require("express-mysql-session")(session),
  passport = require("passport");

//modulo para las alertas
const flash = require("connect-flash");

const { database } = require("./keys");
//inicializacion
const app = express();
require("./controllers/passport");

// importar rutas
const routes = require("./rutas/rutas");

//configuracion
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// middlewares
app.use(
  session({
    secret: "karenJhonier",
    resave: false,
    saveUninitialized: false,
    store: new mysqlsession(database)
  })
);
app.use(flash());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Variables Globales
app.use((req, res, next) => {
  app.locals.message = req.flash("message");
  app.locals.success = req.flash("mensaje");
  app.locals.user = req.user;
  next();
});

//Rutas
app.use(routes);

//funcion para mostrar el error 404
function error404(req, res, next) {
  let error = new Error();
  error.status = 404;
  res.render("./404.html");
  next();
}

//Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

// Starting Server
app.listen(app.get("port"), () => {
  console.log(`servidor en linea en puerto: ${app.get("port")}`);
});

//metodo para usar el error 404
app.use(error404);
