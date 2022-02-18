import { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import ObjetivosFinanceiros from "../utils/objetivosFinanceiros";
import './components.css'

function SelecionaObjetivos (props) {
  const [checkedState, setCheckedState] = useState(
    new Array(ObjetivosFinanceiros.length).fill(false)
  );

  const [listaObjetivos, setListaObjetivos] = useState([]);
  const [notaFinal, setNotaFinal] = useState([]);

  let state = [];

  const handleOnChange = ( position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);

    const totalObjetivos = updatedCheckedState.reduce(
      (obj, currentState, index) => {
        if (currentState === true) {
          return obj += ObjetivosFinanceiros[index].objetivo;
        }
        return obj
      },
      ''
    );

    setListaObjetivos(totalObjetivos)

    const notaFinalAtualizada = updatedCheckedState.reduce(
      (obj, currentState, index) => {
        if (currentState === true) {
          return obj + ObjetivosFinanceiros[index].nota;
        }
        return obj;
      },
      0
    );
    setNotaFinal(notaFinalAtualizada);
  
  };
  return (
    <div>
      <h3>Objetivos Financeiros Imediatos</h3>
      <ul>
        {ObjetivosFinanceiros.map(({ objetivo }, index) => {
          return (
            <li key={index}>
                  <input
                    type={'checkbox'}
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
        <div>
          <label><strong>Objetivos Selecionados:  </strong>{listaObjetivos}</label>
        </div>
        <div>
          <label><strong>Nota Final: </strong>{notaFinal}</label>
        </div>
      </ul>
      <br/>
      <div>
        <Button className="p-button-success p-button-sm" onClick={() => props.triggerNextStep({id: 'objetivosFinanceirosImediatos', 
            value: listaObjetivos, trigger: 'resumo' })}>
            Prosseguir
        </Button>
      </div>
    </div>
  );
}
export default SelecionaObjetivos