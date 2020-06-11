module.exports = {
  async up(knex){
   return knex.schema.createTable('category_products', table=>{
      table.increments('id').primary();
      table.integer('product_id')
      .notNullable()
      .references('id')
      .inTable('products');
      table.integer('category_id')
      .notNullable()
      .references('id')
      .inTable('category');   
    })
  },
  async down(knex){
    return knex.schema.dropTable('category_products');
  }
}