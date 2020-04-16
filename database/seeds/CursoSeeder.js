'use strict'

/*
|--------------------------------------------------------------------------
| CursoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Curso = use('App/Models/Curso')

class CursoSeeder {
  async run () {

    await Curso.createMany([
      {id: 1, 'nome': 'Análise e Desenvolvimento de Sistemas', 'duracao': 5},
      {id: 2, 'nome': 'Redes de Computadores', 'duracao': 5},
      {id: 3, 'nome': 'Direito', 'duracao': 8},
      {id: 4, 'nome': 'Medicina', 'duracao': 10},
      {id: 5, 'nome': 'Enfermagem', 'duracao': 5},
    ])
  }
}

module.exports = CursoSeeder
