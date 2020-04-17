'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Curso:
*      type: object
*      properties:
*        id:
*          type: integer
*        nome:
*          type: string
*          maxLength: 50
*        duracao:
*          type: integer
*        created_at:
*          type: string
*          format: date 
*        updated_at:
*          type: string
*      required:
*        - nome
*/
class Curso extends Model {
}

module.exports = Curso
