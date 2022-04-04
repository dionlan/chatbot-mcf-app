import React, { useState } from "react";
import ChildComponent from './ChildComponent'

/**
 * Provider - Component PAI: criar o context e fornece o objeto userDetails para os filhos e filhos dos filhos, por meoi do value
 * Qualquer componente em sua hierarquia poderá acessas esse objeto, bastando apenas usar o contexto userDetailContext
 */
export const userDetailContext = React.createContext(null);

export default function UserDetailsComponent() {

  const [userDetails] = useState({
    name: "Dionlan",
    age: 30
  });

  return (
    <userDetailContext.Provider value={userDetails}>
      <h1>This is the Parent Component</h1>
      <hr />
      <ChildComponent userDetails={userDetails} />
    </userDetailContext.Provider>
  );
} 