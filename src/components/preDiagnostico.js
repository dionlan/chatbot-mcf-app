import React, { useEffect, useState } from 'react';
import PreDiagnosticoService from '../service/preDiagnosticoService'

const PreDiagnostico = (props) => {
  const service = new PreDiagnosticoService();
  const [previaDiagnostico, setPreviaDiagnostico] = useState([]);
  
  const personInput = props.respostas
  useEffect(() => {
    service.buscarResultadoPrevio(personInput.id)
    .then(response => {
      const lista = response.data
        if(lista.length < 1){
            console.log('Nenhum resultado encontrado.')
        }
        setPreviaDiagnostico(preDiagnostico => response.data)
      props.triggerNextStep({id: 'preDiagnostico', message:'pre_diagnostico', trigger: 'finaliza' })
    }).catch(error => {
      console.log('ERRO!', error)
    })
  }, []) 
  console.log('PRÉVIA DO DIAGNÓSTICO: ', previaDiagnostico)
  
  return (
    <div>
      <h5>Muito obrigado, {personInput.name}!</h5> 
      <p>Sua nota prévia: <strong> {JSON.stringify(previaDiagnostico.finalNote)} </strong></p>
      <p>Sua classificação prévia é considerada como: <strong> {JSON.stringify(previaDiagnostico.classification)} </strong></p>
    </div>
  )
}
export default PreDiagnostico;