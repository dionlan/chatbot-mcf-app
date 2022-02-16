import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Pessoa(props){
  
    const [state, setState] = useState({ nome: '', idade: ''});

    useEffect(() => {
      const { steps } = props;
      const { nome, idade } = steps;
      setState({ nome, idade});
    }, [props])

    
    const { nome, idade } = state;

    //console.log('Dados Pessoais: ', state)

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
          </tbody>
        </table>
      </div>
    )
}
Pessoa.propTypes = {
  steps: PropTypes.object,
};

Pessoa.defaultProps = {
  steps: undefined,
};
export default Pessoa;