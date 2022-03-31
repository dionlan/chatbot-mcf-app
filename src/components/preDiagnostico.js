import React, { useEffect, useState } from 'react';
import PreDiagnosticoService from '../service/preDiagnosticoService'

function PreDiagnostico(props){

  const service = new PreDiagnosticoService();
  const [preDiagnostico, setPrediagnostico] = useState([]);
  const respostas = props.respostas

  useEffect(() => {
     service.buscarResultadoPrevio(respostas.id)
    .then(response => {
      const lista = response.data
        if(lista.length < 1){
            console.log('Nenhum resultado encontrado.')
        }
        setPrediagnostico(preDiagnostico => response.data)
      props.triggerNextStep({id: 'preDiagnostico', message:'pre_diagnostico', trigger: 'finaliza' })
    }).catch(error => {
      console.log('ERRO!', error)
    }) 
    console.log('PROPS PRE DIAGNOSTICO: ', preDiagnostico)
  }, [])

  return (
    <>
      <h2>Prévia do seu Diagnóstico Financeiros</h2>
        {respostas}
        {preDiagnostico}
    </>
  )
}
export default PreDiagnostico;