import React, { useState, useEffect, createContext, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import './components.css'
import { PessoaService } from '/service/pessoaService';
import PreDiagnosticoService from '/service/preDiagnosticoService'
import ChildComponent from '../teste/userEffect/ChildComponent';
import PreDiagnostico from './preDiagnostico';
import { userDetailContext } from '../chat/novo';

const ResumoPessoa = (props) => { 

  const[respostas, setRespostas] = useState([])
  const[objetivosFinanceiros, setObjetiosFinanceiros] = useState([]) 
  const preDiagnosticService = new PreDiagnosticoService();
  const pessoaService = new PessoaService();
  const responseInput = props.respostas
  let { setUserDetails } = useContext(userDetailContext);

  const handUserDetails = (info) => setUserDetails({
    id: info.id,
    name: responseInput.name,
    email: responseInput.email,
    finalNote: info.finalNote,
    classification: info.classification,
    personId: responseInput.id

  })

  const buscarPreviaDiagnostico = (id) => {
    console.log('ID BUSCA PREVIA DIAGNOSTICO: ', id)
    preDiagnosticService.buscarResultadoPrevio(id)
    .then(response => {
      console.log('RESPONSE DA BUSCA RESOLTADO PREVIO: ', response)
      handUserDetails(response.data)
    }).catch(error => {
      console.log('ERRO!', error)
    })
  }
  
  useEffect(() => {
    console.log('PROPS respostas RESUMO: ', props.respostas)
    console.log('PROPS props.respostas.responses RESUMO: ', props.respostas.responses.filter(b => !Array.isArray(b.itemResponses)))
    const _respostas = props.respostas.responses.filter(b => !Array.isArray(b.itemResponses))
    //[...Object.values(props.respostas.responses).filter(b => !Array.isArray(b.responses))]
    
    //console.log('PROPS _respostas RESUMO: ', _respostas)
    const _objetivosFinanceiros = props.respostas.responses.filter(b => Array.isArray(b.itemResponses))
    //console.log('PROPS _objetivosFinanceiros RESUMO: ', _objetivosFinanceiros[0].itemResponses)
    setRespostas(_respostas)
    setObjetiosFinanceiros(_objetivosFinanceiros[0].itemResponses)
  }, []) 

  /*
  useEffect( () => { 
    console.log('RESULTADO PREVIO NO RESUMO: ', userDetails)
    if(userDetails.id){
      {console.log('CONTEXTOOOO USER DETAILS: ', userDetails)}
      <userDetailContext.Provider value={userDetails}>
        {userDetails}
      </userDetailContext.Provider>
    }
  },[userDetails])*/


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
    pessoaService.atualizarPessoa(responseInput)
    .then(responseInput => {
      console.log('Dados Pessoais e Financeiros Atualizados com Sucesso!!', responseInput.data)

    }).catch(error => {
      console.log('ERRO!', error)
    })

    preDiagnosticService.salvarPreDiagnostico(responseInput)
    .then(responsePrevia => {
      console.log('PRÉVIA DO DIAGNÓSTICO CADASTRADA COM SUCESSO', responsePrevia.data)
      //preDiagnosticService.salvarPreDiagnostico(responseInput)
      console.log('Prévia do Diagnóstico cadadastrada com sucesso!', responsePrevia.data)
      buscarPreviaDiagnostico(responsePrevia.data.id)

      return (
        <userDetailContext.Provider value={{ handUserDetails }}>
          <PreDiagnostico />
        </userDetailContext.Provider>
      );
    }).catch(error => {
      console.log('ERRO!', error)
    }).finally(
      props.triggerNextStep({id: 'resumo', message:'resumo_pessoa', trigger: '32' })
    )
/*
    preDiagnosticService.buscarResultadoPrevio(responseInput.id)
    .then(response => {
      console.log('RESPONSE DA BUSCA RESOLTADO PREVIO: ', response.data)
      const lista = response.data
        if(lista.length < 1){
            console.log('Nenhum resultado encontrado.')
        }
        userDetails = {
          classification: response.data.classification, 
          finalNote: response.data.finalNote
        }
        return userDetails;
    }).catch(error => {
      console.log('ERRO!', error)
    }).finally(
      props.triggerNextStep({id: 'resumo', message:'resumo_pessoa', trigger: '32' })
    )*/
  }

  return (
    <>

    { /* console.log('respostas: ', respostas ) */}
    { /*console.log('objetivosFinanceiros: ', objetivosFinanceiros) */}

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
          { /* Respostas {JSON.stringify(respostas)} <br/> */}
          <Button className="p-button-success p-button-sm" onClick={salvar}> 
            Prosseguir </Button>
        </div>
    </>
    
  )
}
export default ResumoPessoa ;