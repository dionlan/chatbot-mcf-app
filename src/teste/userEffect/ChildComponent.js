import React  from "react";
import SubChildComponent from './SubChildComponent'

export default function ChildComponent() {
    return (
      <div>
        <h2>This is Child Component</h2>
        <hr />
        <SubChildComponent />
      </div>
    );
  }