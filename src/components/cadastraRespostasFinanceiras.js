import React, { useEffect, useState } from 'react';
import PessoaService from '../service/pessoaService';

function CadastraRespostasFinanceiras(props) {

  const pessoaService = new PessoaService();

  console.log('PROPS CADASTRA RESPOSTAS FINANCEIRAS', props)

  const responseInput = Object.values(props.respostas)

  console.log('RESPONSES INPUT: ', responseInput)
  /*
  useEffect(() => {
    pessoaService.salvarPessoa(personInput)
    .then(response => {
      console.log('dados pessoais salvos com sucesso!')
    }).catch(error => {
      console.log('ERRO!')
    }) 

    console.log('personInput: ', personInput)
  }, [])

*/

  
  
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
      Ótimo! 👏
    </div>
  )
  
}
export default CadastraRespostasFinanceiras;