"use strict";
const { MongoClient, ServerApiVersion } = require("mongodb");

const mongoose = require("mongoose");
var app = require("./app");
var port = 3800;

//****************************************************************************************** */
mongoose.connect(
  "mongodb+srv://Adrian:Ary160301@cluster1.uupwdtz.mongodb.net/Nostra-Eccomerce?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:")); // enlaza el track de error a la consola (proceso actual)
db.once("open", () => {
  //Crear servidor
  app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3800");
  });
  console.log("Base de datos conectada"); // si esta todo ok, imprime esto
});
