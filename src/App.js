import ChatBot from 'react-simple-chatbot';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Pessoa from './pessoa';
import SelecionaMultiplasRespostas from './selecionaMultiplasRespostas';

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

  /*
  const CustomStep = ({ triggerNextStep }) => {
    console.log('TRIGGER NEXT STEP: ', triggerNextStep)
    return (
        <button onClick={() => triggerNextStep({ trigger: '3' })}>Next</button>
    );
}; */
  
  return (
    <div className="App">
      
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="Meu Diagnóstico Financeiro" placeholder="Vamos conversar..."
            
            steps={[
              {
                id: 'q1',
                message: 'Vamos lá, qual o seu nome?',
                trigger: 'nome',
              },
              {
                id: 'nome',
                user: true,
                validator: (value) => {
                  if (/^[A-Za-z]+$/.test(value)) {
                    return true
                  } else {
                    return 'Por favor, informe apenas caracteres.'
                  }
                 },
                //trigger: ({value}) => value.toLowerCase() === '1' ? '2' : '2'
                trigger: 'q2',
              },
              {
                id: 'q2',
                message: 'Olá, {previousValue}, qual sua idade?', 
                trigger: 'idade'
              },
              {
                id: 'idade',
                user: true,
                trigger: 'objetivosFinanceirosImediatos'
              },
              {
                id: 'objetivosFinanceirosImediatos',
                component: <SelecionaMultiplasRespostas />,
                asMessage: true,
              }, 
              {
                id: 'resumo',
                message: 'Ótimo! Confira o resumo.',
                trigger: 'pessoa',
              },
              {
                id: 'pessoa',
                component: <Pessoa />,
                asMessage: true,
              },
              {
                id: 'update',
                message: 'Gostaria de atualizar algo?',
                trigger: 'update-question',
              },
              {
                id: 'update-question',
                options: [
                  { value: 'yes', label: 'Sim', trigger: 'update-yes' },
                  { value: 'no', label: 'Não', trigger: 'end-message' },
                ],
              },
              {
                id: 'update-yes',
                message: 'Qual campo gostaria de atualizar?',
                trigger: 'update-fields',
              },
              {
                id: 'update-fields',
                options: [
                  { value: 'nome', label: 'Nome', trigger: 'update-nome' },
                  { value: 'idade', label: 'Idade', trigger: 'update-idade' },
                ],
              },

              {
                id: 'update-nome',
                update: 'nome',
                trigger: 'resumo',
 
              },
              {
                id: 'update-idade',
                update: 'idade',
                trigger: 'resumo',
              },
              {
                id: 'end-message',
                message: 'Obrigado! Sucesso!',
                end: true,
              },
            ]}
 
          />

          
     
        </ThemeProvider>
    </div>
  );
}

export default App;
