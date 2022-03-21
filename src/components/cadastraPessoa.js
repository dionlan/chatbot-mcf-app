import React from 'react';
import PessoaService from '../service/pessoaService';

function CadastraPessoa(props) {

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  const pessoaService = new PessoaService();

  console.log('DADOS PESSOAIS: ', Object.values(props))

  const usuario = {
    nome: nome,
    email: email
}
  /*
    service.salvar(usuario)
    .then(response => {
        mensagemSucesso('Usuário cadastrado com sucesso. Faça o login para acessar o sistema.')
        navigate('/login')
    }).catch(erro => {
        mensagemErro(erro.response.data.detail)
    })*/


  return (
    <>
    </>
  );
}
export default CadastraPessoa;