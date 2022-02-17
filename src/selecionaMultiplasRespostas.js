import { useState } from "react";
import { objetivosFinanceiros } from "./utils/objetivosFinanceiros";
import './App.css';

const getFormattedNota = (nota) => `${nota.toFixed(2)}`;

const getFormattedObjetivos = (objetivo) => `${objetivo}`;

export default function SelecionaMultiplasRespostas (props) {
  const [checkedState, setCheckedState] = useState(
    new Array(objetivosFinanceiros.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const [objetivos, setObjetivos] = useState([]);
  let state = [];
  const handleOnChange = ( position ) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
      
    );
    
    const totalObjetivos = updatedCheckedState.reduce(
      
      (obj, currentState, index) => {
        if (currentState === true) {
          console.log(index)
          return state += objetivosFinanceiros[index].objetivo + ' '
        }
        return obj
      }
    );
    
    setObjetivos(totalObjetivos)
    setCheckedState(updatedCheckedState);

/*
    const totalNota = updatedCheckedState.reduce(
      (obj, currentState, index) => {
        if (currentState === true) {
          return obj + objetivosFinanceiros[index].nota;
        }
        return obj;
      },
      0
    ); */
    //setTotal(totalNota);
    
  };

  return (
    
    <div>
      <h3>Objetivos Financeiros Imediatos</h3>
      <ul>
        {objetivosFinanceiros.map(({ objetivo }, index) => {
          return (
            <li key={index}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    objetivo={objetivo}
                    value={objetivo}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{objetivo}</label>
            </li>
          );
        })}
        <li>
            {/* <div>{getFormattedNota(total)}</div> */}
            <div>Selecionado(s): {objetivos}</div>
            <button onClick={() => props.triggerNextStep({id: 'objetivosFinanceirosImediatos', value: objetivos, trigger: 'resumo' })}>Next</button>
        </li>
      </ul>
    </div>
  );
}
