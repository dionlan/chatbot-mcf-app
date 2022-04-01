import React, { useEffect } from 'react';
import PessoaService from '../service/pessoaService';

function CadastraPessoa(props) {

  const pessoaService = new PessoaService();

  const personInput = props.respostas

  useEffect(() => {
    pessoaService.salvarPessoa(personInput)
    .then(response => {
      const personId = {
        personId: response.data.id
      }
      props.respostas.id = response.data.id
      console.log('Informações pessoais cadastradas com sucesso!', props.respostas)
      props.triggerNextStep({id: 'cadastraPessoa', message:'cadastra_pessoa', value:props.respostas, trigger: '1' })
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