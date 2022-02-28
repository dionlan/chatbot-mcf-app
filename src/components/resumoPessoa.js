import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

function ResumoPessoa(props){

  const[respostas, setRespostas] = useState([])
  const [editingRows, setEditingRows] = useState({});
  const [listaEditada, setListaEditada] = useState(null);
  const [resultado, setResultado] = useState([])

  useEffect(() => {
    setRespostas(props.respostas)
    const _resultado = [...Object.values(respostas)]
    setResultado(_resultado)
  }, [props])
  
  console.log('resultado: ', resultado)

  const onCellEditComplete = (e) => {
    let { rowData, index, newValue, field, originalEvent: event } = e;
    let _resultado = [...resultado];
    if (newValue.trim().length > 0){
      rowData[field] = newValue;
      setResultado(_resultado, rowData[field]);
      console.log('lista atualizada após edição: ', _resultado[index])
    }else{
      event.preventDefault();
    } 
  }


  const onRowEditComplete = (e) => {
    let _resultado = [...resultado];
    let { newData, index } = e;
    _resultado[index] = newData;
    setResultado(_resultado);
  }

  const onRowEditChange = (e) => {
    setEditingRows(e.data);
  }

  const cellEditor = (options) => {
    return textEditor(options);
  }

  const textEditor = (options) => {
    console.log('VALUR ATUALIZADO: ', options.value)
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
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
          <DataTable value={resultado} editMode="cell" editMode="cell" className="editable-cells-table" responsiveLayout="scroll">

            <Column field="id" header="Id" style={{ width: '1%' }}> </Column>

            <Column field="value" header="Resposta" style={{ width: '25%' }} editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
          
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