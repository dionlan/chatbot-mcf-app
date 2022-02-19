import { useState } from "react";
import { Button } from 'primereact/button';
import ObjetivosFinanceiros from "../utils/objetivosFinanceiros";
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import './components.css'

function SelecionaObjetivos (props) {
  const [checkedState, setCheckedState] = useState(
    new Array(ObjetivosFinanceiros.length).fill(false)
  );

  const [state, setState] = useState({ 
    outros: []
  })

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const [listaObjetivos, setListaObjetivos] = useState([]);
  const [notaFinal, setNotaFinal] = useState([]);

  const handleOnChange = ( position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);

    const totalObjetivos = updatedCheckedState.reduce(
      (obj, currentState, index) => {
        if (currentState === true) {
          return obj += ObjetivosFinanceiros[index].objetivo + ' ';
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
      <div className="card">
      <h3>Objetivos Financeiros Imediatos</h3>
      <ul>
        {ObjetivosFinanceiros.map(({ objetivo, nota }, index) => {
          return (
            <li key={index}>
              {objetivo !== 'Outros' ?
              <>
                <Checkbox
                  type={'checkbox'}
                  id={`custom-checkbox-${index}`}
                  value={objetivo}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
                <label htmlFor={`custom-checkbox-${index}`}>{objetivo}</label>
              </>
              : 
              <InputText type="text" name="outros" value={state.outros} className="p-inputtext-sm" onChange={handleInputChange} placeholder="Outros objetivos" />
              }
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
        <Button className="p-button-success p-button-sm" onClick={() => props.triggerNextStep({value: listaObjetivos + state.outros, 
                                                                                               trigger: 'resumo' })}>
            Prosseguir
        </Button>
      </div>
    </div>

    </div>
  );
  
}
export default SelecionaObjetivos