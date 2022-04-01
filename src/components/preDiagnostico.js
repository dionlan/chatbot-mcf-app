import React, { useEffect, useState } from 'react';
import PreDiagnosticoService from '../service/preDiagnosticoService'
import { useContext } from "react";

const PreDiagnostico = (props) => {
  const service = new PreDiagnosticoService();
  const [preDiagnostico, setPrediagnostico] = useState([]);
  const personInput = props.respostas

  useEffect(() => {
    console.log('PROPS USERCONTEXT USER: ', personInput)
    service.buscarResultadoPrevio(personInput.email)
    .then(response => {
      const lista = response.data
        if(lista.length < 1){
            console.log('Nenhum resultado encontrado.')
        }
      setPrediagnostico(preDiagnostico => lista)
      props.triggerNextStep({id: 'preDiagnostico', message:'pre_diagnostico', trigger: 'finaliza' })
    }).catch(error => {
      console.log('ERRO!', error)
    })
  }, []) 

  return (
    <>
    {preDiagnostico}
    </>
  )
}
export default PreDiagnostico;