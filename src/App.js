import ChatBot from 'react-simple-chatbot';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

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
            className=""
            steps={[
              {
                id: '1',
                message: 'Vamos lá, qual o seu nome?',
                trigger: '2',
              },
              {
                id: '2',
                user: true,
                trigger: '3',
              },
              {
                id: '3',
                message: 'Olá, {previousValue}, qual sua idade?',
                trigger: '4',
              },
              {
                id: '4',
                user: true,
                trigger: '5',
              },
              {
                id: '5',
                message: 'Informe o seu melhor e-mail.',
                trigger: '6',
              },
              {
                id: '6',
                user: true,
                trigger: '7',
              },
              {
                id: '7',
                message: 'Qual o seu telefone?',
                trigger: '8',
              },
              {
                id: '8',
                user: true,
                trigger: '9',
              },
              {
                id: '9',
                message: 'Além de você, quantas pessoas dependem exclusivamente do seu dinheiro?',
                trigger: '10',
              },
              {
                id: '10',
                options: [
                  { value: 1, label: '4 ou mais pessoas', trigger: '11' },
                  { value: 2, label: '3 pessoas', trigger: '11' },
                  { value: 3, label: '2 pessoas', trigger: '11' },
                  { value: 4, label: '1 pessoa', trigger: '11' },
                  { value: 5, label: 'Ninguém', trigger: '11' },
                ],
              },
              {
                id: '11',
                message: 'Qual a sua faixa de renda mensal?',
                trigger: '12',
              },
              {
                id: '12',
                options: [
                  { value: 1, label: 'até 2 mil', trigger: '12' },
                  { value: 2, label: 'de 2 a 6 mil', trigger: '12' },
                  { value: 3, label: 'de 6 a 12 mil', trigger: '12' },
                  { value: 4, label: 'de 12 a 20 mil', trigger: '12' },
                  { value: 5, label: 'acima de 20 mil', trigger: '12' },
                ],
              },

            ]}
    
          />
     
        </ThemeProvider>
    </div>
  );
}

export default App;
