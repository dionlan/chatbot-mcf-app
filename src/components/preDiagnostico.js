import React, { useEffect, useState } from 'react';
import PreDiagnosticoService from '../service/preDiagnosticoService'
import { Message } from 'primereact/message';
import ReactStoreIndicator from 'react-score-indicator'
import { userDetailContext } from '../chat/novo';

const PreDiagnostico = () => {
  const contextData = React.useContext(userDetailContext);
  console.log('USER CONTEXT PRE DIAGNOSTICO: ', contextData)
  
  return (
    <>
      <div>
        <h5>Muito obrigado, {contextData.userDetails.name}!</h5> 
        <p>Segue uma prévia da sua saúde financeira atual.</p>
        <p>Sua nota parcial foi de <strong>{contextData.userDetails.finalNote}</strong> pontos. </p>
        
        Isso significa que o seu diagnóstico está classificado como: <strong>{contextData.userDetails.classification}</strong>.
        Mas não se preocupe, estamos aqui pra te ajudar.
        <br/>
        <br/>
      </div>
      <div>
        <ReactStoreIndicator 
          value={parseInt(contextData.userDetails.finalNote)}
          textStyle={{bottom: '45px'}}
          maxValue={100}
          lineWidth={40}
          lineGap={2} 
          fadedOpacity={20}
          borderWidth={100}
          maxAngle={180}/>
      </div>

      <div style={{ display: "flex", justifyContent: 'center'}}>
        <Message severity={contextData.userDetails.classification === 'Bem Estar Financeiro' ? "success" : 
                            contextData.userDetails.classification === 'Favorável' ? "success" : 
                            contextData.userDetails.classification === 'Mediano' ? "info" : 
                            contextData.userDetails.classification === 'Alerta' ? "warn" : "error"}
                  text={contextData.userDetails.classification}/>
      </div>
    </>
  )
}
export default PreDiagnostico;