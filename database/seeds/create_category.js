const knex = require('knex');

module.exports = {
  async seed(knex){
    await knex('category').insert([
      {name: 'Eletrodomesticos'},
      {name: 'Eletro Portateis'},
      {name: 'Casa'}
    ]);
  }
}