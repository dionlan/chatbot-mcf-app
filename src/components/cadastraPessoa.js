import React, { useEffect } from 'react';
import PessoaService from '../service/pessoaService';

function CadastraPessoa(props) {

  const pessoaService = new PessoaService();

  const personInput = props.respostas

  useEffect(() => {
    pessoaService.salvarPessoa(personInput)
    .then(response => {
      console.log('Informações pessoais cadastradas com sucesso!', response)
      props.triggerNextStep({id: 'cadastraPessoa', message:'cadastra_pessoa', value:response.data, trigger: '1' })
    }).catch(error => {
      console.log('ERRO!', error)
    }) 
    console.log('PROPS CADASTRA PESSOA: ', props.respostas)
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
      Ótimo 👏
    </div>
  )
  
}
export default CadastraPessoa;