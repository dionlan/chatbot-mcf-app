import React, { useState, useEffect } from 'react';

function ResumoPessoa(props){
  
    const [state, setState] = useState({ nome: '', idade: '', objetivosFinanceirosImediatos: ''});

    useEffect(() => {
      const { steps } = props;
      const { nome, idade, objetivosFinanceirosImediatos} = steps;
      setState({ nome, idade, objetivosFinanceirosImediatos});
    }, [props])

    
    const { nome, idade, objetivosFinanceirosImediatos } = state;

    console.log('Dados Pessoais: ', state)

    return (
        
        <div style={{ width: '100%' }}>
        <h3>Resumo</h3>
        <table>
          <tbody>
            <tr>
              <td>Nome: </td>
              <td>{nome.value}</td>
            </tr>
            <tr>
              <td>Idade: </td>
              <td>{idade.value}</td>
            </tr>
            <tr>
              <td>Objetivos Financeiros: </td>
              <td> {JSON.stringify(objetivosFinanceirosImediatos.value)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
export default ResumoPessoa;