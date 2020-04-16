'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CursoSchema extends Schema {
  up () {
    this.create('cursos', (table) => {
      table.increments()
      table.string('nome').notNullable().unique()
      table.string('duracao')
      table.timestamps()
    })
  }

  down () {
    this.drop('cursos')
  }
}

module.exports = CursoSchema
