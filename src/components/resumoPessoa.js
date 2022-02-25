import React, { useState, useEffect } from 'react';

function ResumoPessoa(props){

  const {state, setState} = useState({
    steps: {},
    previousStep: {}
  })
  
  console.log(props)
  
  //const steps =[ props.steps ]

  //console.log(state) 

  return (
      
      <div style={{ width: '100%' }}>
      <h3>Resumo</h3>
  
      { /** {JSON.stringify(steps, null, 2) } 
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
      */}
    </div>
  )
}
export default ResumoPessoa;