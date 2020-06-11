module.exports = {
  async up(knex){
   return knex.schema.createTable('category', table=>{
      table.increments('id').primary();
      table.string('name').notNullable();
      })
  },
  async down(knex){
    return knex.schema.dropTable('category');
  }
}