'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurmaSchema extends Schema {
  up () {
    this.create('turmas', (table) => {
      table.increments()
      table.integer('disciplina_id').unsigned().references('id').inTable('disciplinas')
      table.integer('professor_id').unsigned().references('id').inTable('professores')
      table.timestamps()
    })
  }

  down () {
    this.drop('turmas')
  }
}

module.exports = TurmaSchema
