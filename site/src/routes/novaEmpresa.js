var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/cadastrar", function (req, res) {
    novaEmpresaController.cadastrar(req, res);
  });
  
  module.exports = router;