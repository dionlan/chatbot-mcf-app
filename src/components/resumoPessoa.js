import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

function ResumoPessoa(props){

  const[respostas, setRespostas] = useState([])

  const columns = [
    { field: 'id', header: 'Id da Questão ' },
    { field: 'value', header: 'Resposta' },
];

  useEffect(() => {
    setRespostas(props.respostas)
  }, [props])

  const resultado = [...Object.values(respostas)]

  console.log('resultado: ', resultado)

  const cellEditor = (options) => {
    return textEditor(options);
  }

  const textEditor = (options) => {
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
  }

  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;

  switch (field) {
    default:
      if (newValue.trim().length > 0)
          rowData[field] = newValue;
      else
          event.preventDefault();
      break;
  }
}

  return (
    <div className="datatable-editing-demo">
      {/* 
      {resultado.map(({id, value }, index) => {
        console.log('INDEX: ', id, value ) 
        return (
          <li key={index}>
            ID Resposta: { id } 
            Valor: { Object.values(value) }
          </li>
          ) 
        })
      }*/}

      <div>
        <h5>Resultado do Diagnóstico Financeiro</h5>
        <p>Para editar qualquer valor, clique no campo a ser corrigido.</p>
        <DataTable value={resultado} editMode="cell" className="editable-cells-table" responsiveLayout="scroll">
          {
            columns.map(({ field, header }) => {
                return <Column key={field} field={field} header={header} style={{ width: '25%' }}
                    editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete}/>
            })
          }
        </DataTable>
      </div>
      

      

      {
        /**
        <table>
        <tr key={"header"}>
          {Object.keys(resultado[0]).map((key) => (
            <th>{key}</th>
          ))}
        </tr>

        {resultado.map(item => (
          <tr key={item.id}>
            {Object.values(item).map((val) => (
              <td>{val}</td>
            ))}
          </tr>
          ))}
        </table>




       {JSON.stringify(steps, null, 2) }  <label><strong>Respostas: </strong>{respostas}</label>
      <table>
        <tbody>
          <tr>
            <td>Id da Resposta: </td>
            <td>{nome.value}</td>
          </tr>
          <tr>
            <td>Valor: </td>
            <td>{idade.value}</td>
          </tr>
        </tbody>
      </table>
      */}
    </div>
  )
}
export default ResumoPessoa;