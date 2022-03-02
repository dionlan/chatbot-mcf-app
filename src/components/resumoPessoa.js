import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import './components.css'

function ResumoPessoa(props){

  const[respostas, setRespostas] = useState([])
  console.log('props: ', props)
  useEffect(() => {
    const _respostas = [...Object.values(props.respostas)]
    setRespostas(_respostas)
  }, [props])
  
  console.log('respostas: ', respostas)

  const onCellEditComplete = (e) => {
    let { rowData, index, newValue, field, originalEvent: event } = e;
    let _respostas = [...respostas];
    if (newValue.toString().trim().length > 0){
      rowData[field] = newValue;
      setRespostas(_respostas, rowData[field]);
      console.log('lista atualizada após edição: ', _respostas[index])
    }else{
      event.preventDefault();
    } 
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
        <DataTable value={respostas} editMode="cell" responsiveLayout="scroll">
          <Column field="id" header="Id" style={{ width: '1%' }}> </Column>
          <Column field="value" header="Resposta" style={{ width: '25%' }} editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
        </DataTable>
        <br/>
        <div>
          Respostas {JSON.stringify(respostas)} <br/>
          <Button  className="p-button-success p-button-sm" onClick={() => props.triggerNextStep({id: 'resumo', trigger: 'q32' })}> Prosseguir </Button>
        </div>
    </>
  )
}
export default ResumoPessoa;