var database = require("../database/config");
function cadastrar(nome, cnpj) {
    var query = `insert into empresa (nome, cnpj) values ('${nome}', '${cnpj}')`;
  
    return database.executar(query);
  }

  module.exports = {cadastrar}