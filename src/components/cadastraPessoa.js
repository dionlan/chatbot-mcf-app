import React, { useEffect, useState } from 'react';
import PessoaService from '../service/pessoaService';

function CadastraPessoa(props) {

  const pessoaService = new PessoaService();

  const personInput = {
    name: Object.values(props.respostas)[0].itemResponse,
    email: Object.values(props.respostas)[1].itemResponse
  }

  useEffect(() => {
    pessoaService.salvarPessoa(personInput)
    .then(response => {
      console.log('dados pessoais salvos com sucesso!')
    }).catch(error => {
      console.log('ERRO!')
    }) 

    console.log('personInput: ', personInput)
  }, [])



  
  
  //props.triggerNextStep({id: 'salvaPessoa', trigger: 'q29' })
  //props.triggerNextStep()
  /*
  pessoaService.salvarPessoa(personInput)
  .then(response => {
    props.triggerNextStep()

    console.log('dados pessoais salvos com sucesso!')
   
  }).catch(error => {
    console.log('ERRO!')
  }) */
  return(
    <div>
      Ótimo, {personInput.name} 👏
    </div>
  )
  
}
export default CadastraPessoa;