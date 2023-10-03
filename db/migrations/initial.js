/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('allProducts', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('brand');
    table.string('category');
    table.string('color');
    table.string('details');
    table.string('description');
    table.string('price');
    table.string('image')
    table.boolean('addedToCart');
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('allProducts')
};