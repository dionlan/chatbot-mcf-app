import React, { useEffect } from 'react';
import PessoaService from '../service/pessoaService';

function CadastraRespostasFinanceiras(props) {

  const pessoaService = new PessoaService();
  const responseInput = props.respostas
  
  useEffect(() => {
    
    pessoaService.salvarPessoa(responseInput)
    .then(response => {
      console.log('dados pessoais salvos com sucesso!')
    }).catch(error => {
      console.log('ERRO!')
    }) 

    console.log('PROPS CADASTRA RESPOSTAS FINANCEIRAS', responseInput)
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
      Ótimo, {responseInput.name} 👏
    </div>
  )
  
}
export default CadastraRespostasFinanceiras;