import React, { useEffect, useState } from 'react';
import PreDiagnosticoService from '../service/preDiagnosticoService'

function PreDiagnostico(props){

  const service = new PreDiagnosticoService();
  const [preDiagnostico, setPrediagnostico] = useState([]);
  const email = props.respostas

  useEffect(() => {
     service.buscarResultadoPrevio(email.email)
    .then(response => {
      const lista = response.data
        if(lista.length < 1){
            console.log('Nenhum resultado encontrado.')
        }
        setPrediagnostico(preDiagnostico => response.data)
      props.triggerNextStep({id: 'preDiagnostico', message:'pre_diagnostico', trigger: 'finaliza' })
    }).catch(error => {
      console.log('ERRO!')
    }) 
    console.log('PROPS PRE DIAGNOSTICO: ', preDiagnostico)
  }, [])

  return (
    <>
    <h2>Prévia do seu Diagnóstico Financeiros</h2>
    {preDiagnostico}
    </>
  )
}
export default PreDiagnostico;