import ChatBot from 'react-simple-chatbot';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Steps } from './components/steps'

function App() {
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

  return (
    <div className="App">
      
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="Meu Diagnóstico Financeiro" placeholder="Vamos conversar..." 
        steps={Steps}
        botDelay={500}
        customDelay={500}

        />
      </ThemeProvider>
    </div>
  );
}

export default App;
