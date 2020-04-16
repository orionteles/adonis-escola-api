'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

class AbstractController {

  constructor(){
    const modelName = this.constructor.name.replace('Controller', '')
    this.model = use('App/Models/' + modelName);
  }

  /**
   * Show a list of all cursos.
   * GET cursos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */  
  async index ({ request, response, view }) {
    return await this.model.all();
  }

  /**
   * Create/save a new entity.
   * POST entitys
   * 
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async store ({ request, response }) {
    const dados = request.only(this.model.getCamposCadastro());
    const object = await this.model.create(dados);
    return response.status(201).send(object);
  }

  /**
   * Display a single entity.
   * GET entitys/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await this.model.findOrFail(params.id)
  }  

  /**
   * Update entity details.
   * PUT or PATCH entitys/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const dados = request.only(this.model.getCamposCadastro());

    const object = await this.model.findOrFail(params.id);
    object.merge(dados)
    await object.save();
    
    return object;
  }

  /**
   * Delete a entity with id.
   * DELETE entitys/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const object = await this.model.findOrFail(params.id);
    object.delete()
    response.status(204);
  }  

}

module.exports = AbstractController
