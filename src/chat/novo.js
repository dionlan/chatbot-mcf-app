import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../lib/index';
import '../chat/chatbot.css'
import Steps from '../components/steps'
import PreDiagnostico from '../components/preDiagnostico';
import ResumoPessoa from '../components/resumoPessoa';
export const userDetailContext = createContext(null);

function Novo() {
  const theme = {
    background: '#f5f8fb',
    headerBgColor: '#45c49e',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#45c49e',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  const [userDetails, setUserDetails] = useState({
    id: null,
    name: null,
    finalNote: null,
    classification: null
  })

  return (
    <ThemeProvider theme={theme}>
      <userDetailContext.Provider value={{userDetails, setUserDetails}}>
          <ChatBot headerTitle="Meu Diagnóstico Financeiro" placeholder="Vamos conversar..." 
            steps={Steps} botDelay={500} customDelay={500} />
      </userDetailContext.Provider>
    </ThemeProvider>
  );
}
export default Novo;