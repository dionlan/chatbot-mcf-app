import React, { useEffect } from 'react';
import PessoaService from '../service/pessoaService';

function CadastraPessoa(props) {

  const pessoaService = new PessoaService();

  console.log('DADOS PESSOAIS: ', Object.values(props.respostas))
  const personInput = {
    name: Object.values(props.respostas)[0].itemResponse,
    email: Object.values(props.respostas)[1].itemResponse
  }

  console.log(personInput)
  pessoaService.salvarPessoa(personInput)
  .then(response => {
    console.log('dados pessoais salvos com sucesso!', response)
  }).catch(error => {
    console.log(error)
  })

  return (
    <>
    </>
  );
}
export default CadastraPessoa;