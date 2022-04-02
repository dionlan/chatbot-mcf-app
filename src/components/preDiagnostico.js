import React, { useEffect, useState } from 'react';
import PreDiagnosticoService from '../service/preDiagnosticoService'
import { Message } from 'primereact/message';
import ReactStoreIndicator from 'react-score-indicator'

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
    <>
      <div>
        <h5>Muito obrigado, {personInput.name}!</h5> 
        <p>Segue uma prévia da sua saúde financeira atual.</p>
        <p>Sua nota parcial foi de <strong>{previaDiagnostico.finalNote}</strong> pontos. </p>
        
        Isso significa que o seu diagnóstico está classificado como: <strong>{previaDiagnostico.classification}</strong>.
        Mas não se preocupe, estamos aqui pra te ajudar.
        <br/>
        <br/>
      </div>
      
      <div>
      <ReactStoreIndicator 
        value={previaDiagnostico.finalNote.toFixed(0)}
        textStyle={{bottom: '45px'}}
        maxValue={100}
        lineWidth={40}
        lineGap={2} 
        fadedOpacity={20}
        borderWidth={100}
        maxAngle={180}/>
      </div>

      <div style={{ display: "flex", justifyContent: 'center'}}>
        <Message severity={previaDiagnostico.classification === 'Bem Estar Financeiro' ? "success" : 
                            previaDiagnostico.classification === 'Favorável' ? "success" : 
                            previaDiagnostico.classification === 'Mediano' ? "info" : 
                            previaDiagnostico.classification === 'Alerta' ? "warn" : "error"}
                  text={previaDiagnostico.classification}/>
      </div>
    </>
  )
}
export default PreDiagnostico;