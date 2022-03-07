import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import './components.css'

function ResumoPessoa(props){

  const[respostas, setRespostas] = useState([])
  const[expandedRows, setExpandedRows] = useState(null);
  const[objetivosFinanceiros, setObjetiosFinanceiros] = useState([]) 

  useEffect(() => {
    const _respostas = [...Object.values(props.respostas).filter(b => !Array.isArray(b.resposta))]
    const _objetivosFinanceiros = [...Object.values(props.respostas).map(a => a.resposta).filter(b => Array.isArray(b))[0]]
    setRespostas(_respostas)
    setObjetiosFinanceiros(_objetivosFinanceiros)
  }, []) 
  
  //console.log('respostas: ', JSON.stringify(respostas, null, 2))

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
    return <input type="text" value={options.value} style={{ width: '100%' }} onChange={(e) => options.editorCallback(e.target.value)} />;
  }
    
  const rowExpansionTemplate = (value) => {
    console.log('data: ', value)
    return (
      <div className="orders-subtable">
          <h5>Objetivos Financeiros Imediatos</h5>
          <DataTable value={value} responsiveLayout="scroll">
              <Column field="id" header="Id" sortable></Column>
              <Column field="objetivo" header="Objetivo" sortable></Column>
          </DataTable>
      </div>
    );
  }

  /*
  adicionar essa lista dentro do campo reposta referente a lista de objetivos financeiros
  ['Quitar as minhas dívidas', 'Juntar dinheiro para a minha aposentadoria', 'asdf']
  OU montar a lista nesse formado vinda de selecionaObjetivos.js
  */

  return (
    <>
    { console.log('respostas: ', respostas ) }
    { console.log('objetivosFinanceiros: ', objetivosFinanceiros) }

      <h5>Resultado do Diagnóstico Financeiro</h5>
        <DataTable value={respostas} editMode="cell" responsiveLayout="scroll" >
          <Column field="idResposta" header="Id Resposta" > </Column>
          <Column field="idQuestao" header="Id Questão" editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
          <Column field="resposta" header="Resposta" editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
        </DataTable>
        <DataTable value={objetivosFinanceiros} responsiveLayout="scroll">
            <Column field="objetivo" header="Objetivos Financeiros"></Column>
        </DataTable>

        <br/>
        <div>
          Respostas {JSON.stringify(respostas)} <br/>
          <Button className="p-button-success p-button-sm" onClick={() => props.triggerNextStep({id: 'resumo', trigger: 'q32' })}> 
            Prosseguir </Button>
        </div>
    </>
  )
}
export default ResumoPessoa;