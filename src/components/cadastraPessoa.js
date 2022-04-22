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
  
  return(
    <div>
      Ótimo 👏
    </div>
  )
  
}
export default CadastraPessoa;