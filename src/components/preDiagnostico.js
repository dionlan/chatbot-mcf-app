import React, { useEffect } from 'react';
import { Message } from 'primereact/message';
import ReactStoreIndicator from 'react-score-indicator'
import { userDetailContext } from '../chat/novo';
import domtoimage from 'dom-to-image';
import EmailService from '../service/emailService';

const PreDiagnostico = () => {
  const contextData = React.useContext(userDetailContext);
  const emailService = new EmailService();

  useEffect(() => {
    canvas()
  }, [])
  
  function canvas(){
    var resultado = document.getElementsByClassName('styles_scoreWrapper__2ELf-')[0]
    console.log('RESULTADO: ', resultado)
    
    function filter (node) {
      return (node.tagName !== 'i');
    }
    var img = new Image();
    domtoimage.toPng(resultado, {filter: filter})
    .then(function (dataUrl) {
        img.src = dataUrl;
        console.log('dataUrl: ', img.src)
        const w = window.open('about:blank', 'Prévia do Diagnóstico Financeiro');
        w.document.body.append(img);

        const email = {
          ownerRef: contextData.userDetails.name,
          emailFrom: "chatbotmcf@gmail.com",
          emailTo: contextData.userDetails.email,
          file64: img.src,
          personId: contextData.userDetails.id
        }
        console.log('Dados do Email: ', email)
        emailService.salvarEmail(email)
    })
    .catch(function (error) {
        console.error('oops, aconteceu algum erro!', error);
    });
  }

  return (
    <>
      <div>
        <h5>Muito obrigado, {contextData.userDetails.name}!</h5> 
        <p>Segue uma prévia da sua saúde financeira atual.</p>
        <p>Sua nota parcial foi de <strong>95</strong> pontos. </p>
        
        Isso significa que o seu diagnóstico está classificado como: <strong>{contextData.userDetails.classification}</strong>.
        <p>Parabéns por sua prosperidade financeira.</p>
        <br/>
        <br/>
      </div>
        <ReactStoreIndicator 
          value={Math.round(contextData.userDetails.finalNote)}
          textStyle={{bottom: '45px'}}
          maxValue={100}
          lineWidth={40}
          lineGap={2} 
          fadedOpacity={20}
          borderWidth={100}
          maxAngle={180}/>
      
      <div style={{ display: "flex", justifyContent: 'center'}}>
        <Message severity={contextData.userDetails.classification === 'Bem Estar Financeiro' ? "success" : 
                           contextData.userDetails.classification === 'Favorável' ? "success" : 
                           contextData.userDetails.classification === 'Mediano' ? "info" : 
                           contextData.userDetails.classification === 'Alerta' ? "warn" : "error"}
                     text={contextData.userDetails.classification}/>
      </div>
      {/*<button onClick={canvas}>Canva</button> */}
    </>
  )
}
export default PreDiagnostico;