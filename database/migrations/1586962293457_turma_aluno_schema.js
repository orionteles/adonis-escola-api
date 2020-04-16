'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurmaAlunoSchema extends Schema {
  up () {
    this.create('turma_alunos', (table) => {
      table.increments()
      table.integer('turma_id').unsigned().references('id').inTable('turmas')
      table.integer('aluno_id').unsigned().references('id').inTable('alunos')     
      table.integer('semestre')
      table.timestamps()
    })
  }

  down () {
    this.drop('turma_alunos')
  }
}

module.exports = TurmaAlunoSchema
