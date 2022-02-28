import React, { useState, useEffect } from 'react';

function ResumoPessoa(props){

  const[respostas, setRespostas] = useState([])

  useEffect(() => {
    const {respostas} = props
    setRespostas(JSON.stringify(respostas))
  }, [props])

 // console.log('respostas: ', respostas)

  return (
      
      <div style={{ width: '100%' }}>
      <h3>Resumo</h3>
      
      <div>
        <label><strong>Respostas: </strong>{respostas}</label>
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