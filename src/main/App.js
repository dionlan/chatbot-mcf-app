import React from 'react';
import Rotas from './rotas'
import "bootswatch/dist/minty/bootstrap.min.css"; 
import 'primereact/resources/themes/lara-light-indigo/theme.css';  //theme
import 'primereact/resources/primereact.min.css';                  //core css
import 'primeicons/primeicons.css';                                //icons
import Navbar from '../components/navbar';

function App() {
  return (
    <>
      <Navbar />
        <div className='container'>
          <Rotas />
        </div>
    </>
  );
}
export default App;