var empresaModel = require("../models/novaEmpresaModel");

function cadastrar(req, res) {
    var cnpj = req.body.cnpj;
    var nome = req.body.nome;
  
    empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
      if (resultado.length > 0) {
        res
          .status(401)
          .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
      } else {
        empresaModel.cadastrar(nome, cnpj).then((resultado) => {
          res.status(201).json(resultado);
        });
      }
    });
  }

  module.exports = {
    cadastrar
}