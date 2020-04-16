'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DisciplinaSchema extends Schema {
  up () {
    this.create('disciplinas', (table) => {
      table.increments()
      table.integer('curso_id').unsigned().references('id').inTable('cursos')
      table.string('nome', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('disciplinas')
  }
}

module.exports = DisciplinaSchema
