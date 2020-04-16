'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Aluno extends Model {

    static getCamposCadastro(){
        return ['nome', 'matricula']
    }
}

module.exports = Aluno
