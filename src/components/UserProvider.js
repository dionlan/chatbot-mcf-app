/*
import React, { createContext, useEffect, useState } from "react";
import ResumoPessoa from "./resumoPessoa";

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log('children abtes:', children)

    React.Children.map(children, child => (
        
        <ResumoPessoa>
            {React.cloneElement(child, child.props)}
        </ResumoPessoa>
    ))

    useEffect(() => {
        console.log('children USEEFFECT: ', children)
        setUser('DIONLAN ALVES DE JESUS')
    })
    console.log('children', children)
    return (
        <UserProvider.Provider value={user}>
            {children}
        </UserProvider.Provider>
    );
}
export { UserContext, UserProvider  };
*/