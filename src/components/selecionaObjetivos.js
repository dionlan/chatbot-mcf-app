import { useState } from 'react';
import { Button } from 'primereact/button';
import ObjetivosFinanceiros from '../utils/objetivosFinanceiros';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import './components.css'

function SelecionaObjetivos (props) {
  const [checkedState, setCheckedState] = useState(
    new Array(ObjetivosFinanceiros.length).fill(false)
  );

  const [state, setState] = useState('')

  const [listaObjetivos, setListaObjetivos] = useState([]);
  const [notaFinal, setNotaFinal] = useState(0);

  const handleOnChange = ( position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);
    const totalObjetivos = updatedCheckedState.reduce(
      (obj, currentState, index) => {
        if (currentState === true) {
          //let newArr = setListaObjetivos({...obj, [listaObjetivos.objetivo]: ObjetivosFinanceiros[index].objetivo})
          let newArr = [...obj, ObjetivosFinanceiros[index].objetivo]
          return newArr
          /*return setStateObjetivo((prevProps) => ({
            ...prevProps,
            [prevProps]: obj + ObjetivosFinanceiros[index].objetivo
          })); */
          //return obj += ObjetivosFinanceiros[index].objetivo + ' ';
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
    <>
      <h4>Objetivos Financeiros Imediatos</h4>
      <ul>
        {ObjetivosFinanceiros.map(({ objetivo }, index) => {
          return (
            <li key={index}>
              {objetivo !== 'Outros' ?
                <>
                  <Checkbox
                    id={`custom-checkbox-${index}`}
                    value={objetivo}
                    type={'checkbox'}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                    autoFocus={true}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{objetivo}</label>
                </>
                  : 
                  <InputText type="text" 
                    className="p-inputtext-sm" 
                    onChange={e=> setState({outros: e.target.value }) } 
                    placeholder="Outros objetivos" />
              }
            </li>
          );
        })}
        <div>
          <label><strong>Objetivos Selecionados:  </strong>{JSON.stringify(listaObjetivos)}</label>
          <label><strong>Outros:  </strong>{JSON.stringify(state)}</label>
        </div>
        <div>
          <label><strong>Nota Final: </strong>{`${notaFinal.toFixed(2)}`}</label> { /** código javascript em HTML {`${javascript}`} */}
        </div>
      </ul>
      <br/>
      <div>
        <Button className="p-button-success p-button-sm" onClick={() => props.triggerNextStep({id: 'r29', value: listaObjetivos.concat(state), 
        trigger: 'q30' })}> Prosseguir </Button>
      </div>
    </>
  );
}
export default SelecionaObjetivos