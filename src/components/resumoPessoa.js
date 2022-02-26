import React, { useState, useEffect } from 'react';

function ResumoPessoa(props){

  const[respostas, setRespostas] = useState([])

  useEffect(() => {
    const {respostas} = props
    setRespostas(respostas)
  }, [props])

  console.log('respostas: ', JSON.stringify(props, null, 2))

  return (
      
      <div style={{ width: '100%' }}>
      <h3>Resumo</h3>
      <div>
        {respostas}
      </div>
      

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