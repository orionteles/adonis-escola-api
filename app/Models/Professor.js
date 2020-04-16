'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Professor extends Model {
    static get table () {
        return 'professores'
    }
}

module.exports = Professor
