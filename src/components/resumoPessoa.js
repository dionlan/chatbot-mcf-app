import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import './components.css'
import DiagnisticoFinanceiroService from '../service/pessoaService';

function ResumoPessoa(props){

  const[respostas, setRespostas] = useState([])
  const[objetivosFinanceiros, setObjetiosFinanceiros] = useState([]) 
  const service = new DiagnisticoFinanceiroService();

  useEffect(() => {
    const _respostas = [...Object.values(props.respostas).filter(b => !Array.isArray(b.resposta))]
    const _objetivosFinanceiros = [...Object.values(props.respostas).map(a => a.resposta).filter(b => Array.isArray(b))[0]]
    setRespostas(_respostas)
    setObjetiosFinanceiros(_objetivosFinanceiros)
  }, []) 

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

  function salvar() {
    const resultadoDiagnostico = [...Object.values(props.respostas)]
    service.cadastrarDiagnosticoFinanceiro(resultadoDiagnostico)
    console.log('Diagnóstico cadastro com sucesso! ')
    props.triggerNextStep({id: 'resumo', trigger: 'q32' })
  }
    

  return (
    <>
    { console.log('respostas: ', respostas ) }
    { console.log('objetivosFinanceiros: ', objetivosFinanceiros) }

      <h5>Resultado do Diagnóstico Financeiro</h5>
        <DataTable value={respostas} editMode="cell" responsiveLayout="scroll" >
          <Column field="idResposta" header="Id Resposta" > </Column>
          <Column field="idQuestao" header="Id Questão" />
          <Column field="resposta" header="Resposta" editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
        </DataTable>
        <DataTable value={objetivosFinanceiros} responsiveLayout="scroll">
            <Column field="objetivo" header="Objetivos Financeiros" editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} ></Column>
        </DataTable>

        <br/>
        <div>
          Respostas {JSON.stringify(respostas)} <br/>
          <Button className="p-button-success p-button-sm"  onClick={salvar}> 
            Prosseguir </Button>
        </div>
    </>
  )
}
export default ResumoPessoa;