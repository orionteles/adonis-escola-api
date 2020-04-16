'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Aluno extends AbstractValidator{

  get rules () {
    const id = this.ctx.params.id
    return {
      nome: 'required|max:100|unique:alunos, nome, id,' + id,
      matricula: 'required|integer|max:10',
      data_nascimento: 'date',
      telefone: 'max:15',
      email: 'max:100|email',
      cep: 'max:10',
      logradouro: 'max:100',
      complemento: 'max:100',
      bairro: 'max:100',
      municipio_id: 'integer',
    }
  }
}

module.exports = Aluno
