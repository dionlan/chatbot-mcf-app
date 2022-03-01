import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import './components.css'

function ResumoPessoa(props){

  const[respostas, setRespostas] = useState([])
  const [editingRows, setEditingRows] = useState({});
  const [listaEditada, setListaEditada] = useState(null);
  const [resultado, setResultado] = useState([])

  useEffect(() => {
    setRespostas(props.respostas)
    const _resultado = [...Object.values(respostas)]
    setResultado(_resultado)
  }, [respostas])
  
  console.log('resultado: ', resultado)

  const onCellEditComplete = (e) => {
    let { rowData, index, newValue, field, originalEvent: event } = e;
    let _resultado = [...resultado];
    if (newValue.toString().trim().length > 0){
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
    return <input type="text" value={options.value} style={{ width: '100%' }}  onChange={(e) => options.editorCallback(e.target.value)} />;
  }


  return (
    <>

    <h5>Resultado do Diagnóstico Financeiro</h5>
      <p>Para editar qualquer valor, clique no campo a ser corrigido.</p>
      <DataTable value={resultado} editMode="cell" responsiveLayout="scroll">
        <Column field="id" header="Id" style={{ width: '1%' }}> </Column>
        <Column field="value" header="Resposta" style={{ width: '25%' }} editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
      </DataTable>
      <br/>
      <div>
        resultado {JSON.stringify(resultado)} <br/>
        <button  onClick={() => props.triggerNextStep({id: 'resumo', trigger: 'q32' })}> Prosseguir </button>
      </div>

 
    </>
  )
}
export default ResumoPessoa;