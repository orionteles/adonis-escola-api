'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MunicipioSchema extends Schema {
  up () {
    this.create('municipios', (table) => {
      table.integer('id').unsigned().primary()
      table.string('uf_id', 2).notNullable().references('id').inTable('ufs')
      table.string('nome', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('municipios')
  }
}

module.exports = MunicipioSchema
