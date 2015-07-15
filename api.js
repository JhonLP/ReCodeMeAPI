/**
 * Dependencias
 */
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

/**
 * Local
 */
var api = module.exports = express();
var port = process.env.PORT || 3000;

/**
 * Middleware
 */
api.use(bodyParser.json('apilication/json'));
api.use(cors());

/**
 * Rutas
 */
var notas = require('./modulos/notas');
api.use(notas);

/**
 * Iniciamos el servidor si no somos dependecia de algo mas
 */
if (!module.parent) {
  mongoose.connect('mongodb://jhonlp:bang@ds053300.mongolab.com:53300/jhonlp', function() {
    api.listen(port, function() {
      console.log('ReCodeMe API Básico escuchando en http://localhost:%s/', port);
    });
  });
}
