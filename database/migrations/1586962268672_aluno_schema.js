'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoSchema extends Schema {
  up () {
    this.create('alunos', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.string('matricula', 10).notNullable()
      table.date('data_nascimento')
      table.string('telefone', 15)
      table.string('email', 100)
      table.string('cep', 10)
      table.string('logradouro', 100)
      table.string('complemento', 100)
      table.string('bairro', 100)
      table.integer('municipio_id').unsigned().references('id').inTable('municipios')
      table.timestamps()
    })
  }

  down () {
    this.drop('alunos')
  }
}

module.exports = AlunoSchema
