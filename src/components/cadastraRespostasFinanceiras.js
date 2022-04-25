import React, { useEffect } from 'react';
import PessoaService from '../service/PessoaService';

function CadastraRespostasFinanceiras(props) {

  const pessoaService = new PessoaService();
  const responseInput = props.respostas
  
  useEffect(() => {
    pessoaService.atualizarPessoa(responseInput)
    .then(response => {
      console.log('Informações financeiras cadastradas com sucesso!', response)
      props.triggerNextStep({id: 'cadastraFinanceiro', message:'lista_financeiro', trigger: '27' })
    }).catch(error => {
      console.log('ERRO!', error)
    }) 
    console.log('PROPS CADASTRA RESPOSTAS FINANCEIRAS', responseInput)
  }, [])
  
  return(
    <div>
      Ótimo, {responseInput.name} 👏
    </div>
  )
}
export default CadastraRespostasFinanceiras;