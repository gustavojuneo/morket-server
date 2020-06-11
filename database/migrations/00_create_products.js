const knex = require('knex');

module.exports = {
  async up(knex){
   return knex.schema.createTable('product', table=>{
      table.increments('id').primary();
      table.string('category_id').notNullable();
      table.string('product_name').notNullable();
      table.string('product_image').notNullable();
      table.string('product_description').notNullable();
    })
  },
  async down(knex){
    return knex.schema.dropTable('product');
  }
}