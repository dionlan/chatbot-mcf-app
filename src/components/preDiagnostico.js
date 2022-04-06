import React from 'react';
import { Message } from 'primereact/message';
import ReactStoreIndicator from 'react-score-indicator'
import { userDetailContext } from '../chat/novo';
import domtoimage from 'dom-to-image';

const PreDiagnostico = () => {
  const contextData = React.useContext(userDetailContext);

  function canvas(){
    var resultado = document.getElementsByClassName('styles_scoreWrapper__2ELf-')[0]
    console.log('RESULTADO: ', resultado)
    
    function filter (node) {
      return (node.tagName !== 'i');
    }
  
    domtoimage.toSvg(resultado, {filter: filter})
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        console.log('IMG: ', img)
        const w = window.open('about:blank', 'image from canvas');
        //w.document.write(''+img+'');
        w.document.body.append(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }

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
      <button onClick={canvas}>Canva</button>
    </>
  )
}
export default PreDiagnostico;