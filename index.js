const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("<h2>Bienbenido</h2>  ");
});

app.get("/database", function(req, res) {
  res.send("<h2>Conectado Ala Base Dedatos</h2>");
});

app.get("/saludo/:nombre", function(req, res) {
  res.send(`<h2>Bienbenido : ${req.params.nombre}</h2>`);
});

app.get("/edad/:xy", function(req, res) {
  if (req.params.xy < 17) {
    res.send("<h2>Bienbenido Eres menor de edad</h2>");
  }
  if (req.params.xy > 18) {
    res.send("<h2>Bienbenido Eres mayor de edad</h2>");
  }
});

mongoose.connect(
  "mongodb://localhost:27017/momento2",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err, res) => {
    if (err) throw err;
    console.log("Conectado a la DB");
  }
);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor ONLINE en el puerto ${port}`);
});
