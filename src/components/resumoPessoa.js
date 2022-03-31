import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import './components.css'
import PessoaService from '../service/pessoaService';
import PreDiagnosticoService from '../service/preDiagnosticoService'

function ResumoPessoa(props){

  const[respostas, setRespostas] = useState([])
  const[objetivosFinanceiros, setObjetiosFinanceiros] = useState([]) 

  useEffect(() => {
    console.log('PROPS respostas RESUMO: ', props.respostas)
    console.log('PROPS props.respostas.responses RESUMO: ', props.respostas.responses.filter(b => !Array.isArray(b.itemResponses)))
    const _respostas = props.respostas.responses.filter(b => !Array.isArray(b.itemResponses))
    //[...Object.values(props.respostas.responses).filter(b => !Array.isArray(b.responses))]
    
    console.log('PROPS _respostas RESUMO: ', _respostas)
    const _objetivosFinanceiros = props.respostas.responses.filter(b => Array.isArray(b.itemResponses))
    console.log('PROPS _objetivosFinanceiros RESUMO: ', _objetivosFinanceiros[0].itemResponses)
    setRespostas(_respostas)
    setObjetiosFinanceiros(_objetivosFinanceiros[0].itemResponses)
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
    const pessoaService = new PessoaService();
    const preDiagnosticService = new PreDiagnosticoService();
    const responseInput = props.respostas
    pessoaService.atualizarPessoa(responseInput)
    .then(response => {
      let personId = {
        personId: response.data.id
      }
      console.log('RESPONSE RESUMO PORSONID! ', personId)
      preDiagnosticService.salvarPreDiagnostico(personId)
      console.log('Pre Diagnóstico cadastro com sucesso! ', response)
      props.triggerNextStep({id: 'resumo', message:'resumo_pessoa', trigger: '32' })
    }).catch(error => {
      console.log('ERRO!', error)
    }) 
    
  }

  return (
    <>
    { console.log('respostas: ', respostas ) }
    { console.log('objetivosFinanceiros: ', objetivosFinanceiros) }

      <h5>Resultado do Diagnóstico Financeiro</h5>
        <DataTable value={respostas} editMode="cell" responsiveLayout="scroll" >
          <Column field="itemResponse" header="Id Resposta" > </Column>
          <Column field="question" header="Id Questão" />
          <Column field="resposta" header="Resposta" editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
        </DataTable>
        <DataTable value={objetivosFinanceiros} responsiveLayout="scroll">
            <Column field="itemObjetivo" header="Id Objetivo" />
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