import React from "react";
import { userDetailContext } from './UserDetailsComponent'

export default function SubChildComponent() {
    const contextData = React.useContext(userDetailContext);
    return (
      <div>
        <h3>This is Sub Child Component</h3>
        <h4>User Name: {contextData.name}</h4>
        <h4>User Age: {contextData.age}</h4>
      </div>
    );
  }