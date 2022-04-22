import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Chatbot from "../chat/chatbot";
import TesteCheckbox from "../teste/testeCheckbox";
import TesteMultiSelect from "../teste/testeMultiSelect";
import Novo from '../chat/novo'
import UserDetailsComponent from "../teste/userEffect/UserDetailsComponent";

function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={ <Novo/> }/>
                <Route path='/chat' element={ <Chatbot /> } />
                <Route path='/chat/novo' element={ <Novo /> } />
                <Route path='/teste/testeCheckbox' element={ <TesteCheckbox /> }/>
                <Route path='/teste/userEffect' element={ <UserDetailsComponent /> }/>
                <Route path='/teste/testeMultiSelect' element={ <TesteMultiSelect /> }/> 
            </Routes>
        </Router>
    )
}
export default Rotas