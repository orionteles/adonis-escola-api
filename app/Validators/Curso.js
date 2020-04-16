'use strict'

class Curso {
  get validateAll (){
    return true;
  }

  get rules () {
    const id = this.ctx.params.id

    return {
      nome: 'required|unique:cursos, nome, id,' + id,
      duracao: 'required'
    }
  }

  get messages () {
    return {
      'required': 'O campo {{ field }} é obrigatório',
      'nome.unique': 'Já existe um curso com esse nome',
      'duracao.required': 'A duração é obrigatória'
    }
  }  

  async fails (errorMessages) {

    console.log(errorMessages);
    

    return this.ctx.response.send(errorMessages)
  }  
}

module.exports = Curso
