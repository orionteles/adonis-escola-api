'use strict'

const AbstractController = use('App/Controllers/Http/AbstractController')

/**
 * Resourceful controller for interacting with cursos
 */
class CursoController extends AbstractController {
  
  /**
  * @swagger
  * /cursos:
  *   get:
  *     tags:
  *       - Cursos
  *     summary: Lista de Cursos
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: Operação realizada com sucesso
  *         schema:
  *           $ref: '#/definitions/Curso'
  *   post:
  *     tags:
  *       - Cursos
  *     summary: Lista de Cursos
  *     produces:
  *       - application/json
  *     responses:
  *       201:
  *         description: Operação realizada com sucesso
  *         schema:
  *           $ref: '#/definitions/Curso'
  * /cursos/{id}:
  *   get:
  *     tags:
  *       - Cursos
  *     summary: Lista de Cursos
  *     produces:
  *       - application/json
  *     responses:
  *       201:
  *         description: Operação realizada com sucesso
  *         schema:
  *           $ref: '#/definitions/Curso'
  *   put:
  *     tags:
  *       - Cursos
  *     summary: Lista de Cursos
  *     produces:
  *       - application/json
  *     responses:
  *       201:
  *         description: Operação realizada com sucesso
  *         schema:
  *           $ref: '#/definitions/Curso'
  *   delete:
  *     tags:
  *       - Cursos
  *     summary: Lista de Cursos
  *     produces:
  *       - application/json
  *     responses:
  *       201:
  *         description: Operação realizada com sucesso
  *         schema:
  *           $ref: '#/definitions/Curso'
  */
}

module.exports = CursoController
