import React from 'react';
import Rotas from './rotas'
import Navbar from '../components/navbar';

/*import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; */
import 'bootswatch/dist/minty/bootstrap.min.css';
import '../styles.css';

function App() {
  return (
    <>
      <Navbar />
        <Rotas />
    </>
  );
}
export default App;