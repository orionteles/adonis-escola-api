'use strict'

class AbstractValidator {
  get validateAll (){
    return true;
  }

  get messages () {
    return {
      'required': 'O campo [{{ field }}] é obrigatório',
      'integer': 'O campo [{{ field }}] deve ser inteiro',
      'unique': 'Já existe um registro com o mesmo valor',
      'email': 'O E-mail informado é inválido',
      'max': 'O valor informado é maior que o máximo permitido',
      'min': 'O valor informado é menor que o mínimo permitido',
      'date': 'O valor informado não é uma data válida',
    }
  }  

  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }  
}

module.exports = AbstractValidator
