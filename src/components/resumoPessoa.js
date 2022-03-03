import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import './components.css'

function ResumoPessoa(props){

  const[respostas, setRespostas] = useState([])
  const [expandedRows, setExpandedRows] = useState(null);
  
  console.log('props: ', props)
  useEffect(() => {
    const _respostas = [...Object.values(props.respostas)]
    setRespostas(_respostas)
  }, [props])
  
  console.log('respostas: ', JSON.stringify(respostas, null, 2))

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

  const rowExpansionTemplate = (data) => {
    console.log('data: ', data)
    return (
        <div className="orders-subtable">
            <h5>Objetivos Financeiros Imediatos</h5>
            <DataTable value={data.objetivo} responsiveLayout="scroll">
                <Column field="id" header="Id" sortable></Column>
                <Column field="objetivo" header="Objetivo" sortable></Column>
            </DataTable>
        </div>
    );
  }

 // const value = respostas.filter(r => r.resposta).map(r => r.resposta);

 
  

  return (
    <>
      <h5>Resultado do Diagnóstico Financeiro</h5>
        <p>Para editar qualquer valor, clique no campo a ser corrigido.</p>
        <DataTable value={respostas} editMode="cell" responsiveLayout="scroll" >
          {respostas.map(resposta => {
            console.log('resposta: ', resposta)
            return (
              <div key={resposta.id}>

                {Array.isArray(resposta.resposta) && resposta.resposta.map(objetivo => {
                    <div key={objetivo.id}>
                      { console.log('objetivos', objetivo.objetivo) }
                    </div>
                  })
                }
              </div>
          )})}
            
          <Column field="idResposta" header="Id" style={{ width: '1%' }}> </Column>
          
          <Column field="idQuestao" header="Resposta" style={{ width: '3em' }} editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} 
                  expander />
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