import { useState } from "react";
import { objetivosFinanceiros } from "./utils/objetivosFinanceiros";
import './App.css';

const getFormattedNota = (nota) => `${nota.toFixed(2)}`;

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
    
    setCheckedState(updatedCheckedState);
    setObjetivos(totalObjetivos)

    const totalNota = updatedCheckedState.reduce(
      (obj, currentState, index) => {
        if (currentState === true) {
          return obj + objetivosFinanceiros[index].nota;
        }
        return obj;
      },
      0
    ); 
    setTotal(totalNota);
    
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
            <div><strong>Selecionado(s):</strong> {objetivos}</div>
            <div><strong>Nota acumulada:</strong> {getFormattedNota(total)}</div>
            <button type="button" className="btn btn-success" onClick={() => props.triggerNextStep({id: 'objetivosFinanceirosImediatos', value: objetivos, trigger: 'resumo' })}>
              Prosseguir
            </button>
        </li>
      </ul>
    </div>
  );
}
