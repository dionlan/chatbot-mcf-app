import React from 'react';

function Pessoa(props){

    let pessoaDados = {
        nome: '',
        idade: ''
    } 
    pessoaDados = props;

    console.log('Dados Pessoais: ', pessoaDados)

    return (
        
        <div style={{ width: '100%' }}>
        <h3>Resumo</h3>
        <table>
          <tbody>
            <tr>
              <td>Nome: </td>
              <td>{pessoaDados.nome}</td>
            </tr>
            <tr>
              <td>Idade: </td>
              <td>{pessoaDados.idade}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}export default Pessoa;