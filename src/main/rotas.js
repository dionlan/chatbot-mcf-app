import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Chatbot from "../chat/chatbot";
import TesteCheckbox from "../teste/testeCheckbox";
import TesteMultiSelect from "../teste/testeMultiSelect";

function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={ <Chatbot/> }/>
                <Route path='/chat' element={ <Chatbot /> } />
                <Route path='/teste/testeCheckbox' element={ <TesteCheckbox /> }/>
                <Route path='/teste/testeMultiSelect' element={ <TesteMultiSelect /> }/> 
            </Routes>
        </Router>
    )
}
export default Rotas