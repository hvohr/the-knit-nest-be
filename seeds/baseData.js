/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const allProducts = require('../data/allProducts');

exports.seed = async function(knex) {
  await knex('allProducts').del()
  await knex('allProducts').insert(allProducts);
};