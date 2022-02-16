import { useState } from "react";
import { objetivosFinanceiros } from "./utils/objetivosFinanceiros";
import './App.css';

const getFormattedNota = (nota) => `$${nota.toFixed(2)}`;

const getFormattedObjetivos = (objetivo) => `${JSON.stringify(objetivo)}`;

export default function SelecionaMultiplasRespostas (props) {
  const [checkedState, setCheckedState] = useState(
    new Array(objetivosFinanceiros.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const [names, setObjetivos] = useState([]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalNota = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + objetivosFinanceiros[index].nota;
        }
        return sum;
      },
      0
    );

    const totalObjetivos = updatedCheckedState.reduce(
        (names, currentState, index) => {
          if (currentState === true) {
            return names + objetivosFinanceiros[index].objetivo;
          }
          return names;
        },
        0
      );

    console.log('NOMES SELECIONADOS: ', totalObjetivos)
    setObjetivos(totalObjetivos);
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
            <div>Total:</div>
            <div>{getFormattedNota(total)}</div>
            <div>{getFormattedObjetivos(JSON.stringify(names))}</div>
            <button onClick={() => props.triggerNextStep({id: 'objetivosFinanceirosImediatos', value: names, trigger: 'resumo' })}>Next</button>
        </li>
      </ul>
    </div>
  );
}
