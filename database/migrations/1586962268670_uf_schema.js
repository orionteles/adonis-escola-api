'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UfSchema extends Schema {
  up () {
    this.create('ufs', (table) => {
      table.string('id', 2).notNullable().unique()
      table.string('nome', 50).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('ufs')
  }
}

module.exports = UfSchema
