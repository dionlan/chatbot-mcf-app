import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Chatbot from "../chat/chatbot";
import Teste from "../teste/teste";

function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={ <Chatbot/> }/>
                <Route path='/teste' element={ <Teste /> }/>
                <Route path='/chat' element={ <Chatbot /> } />
            </Routes>
        </Router>
    )
}
export default Rotas