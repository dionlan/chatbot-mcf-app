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

  const [state, setState] = useState([])

  const [listaObjetivos, setListaObjetivos] = useState([]);
  const [notaFinal, setNotaFinal] = useState(0);

  const handleOnChange = ( position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    /*
      verificar se o inputText está true, depois pegar o position.target.value e setar no setState
    */
    setCheckedState(updatedCheckedState);

    const totalObjetivos = updatedCheckedState.reduce(
      (obj, currentState, index) => {
        if (currentState === true) {
          //let newArr = setListaObjetivos({...obj, [listaObjetivos.objetivo]: ObjetivosFinanceiros[index].objetivo})
          let newArr = [...obj, ObjetivosFinanceiros[index]]
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
 
    if (position.target){
      console.log('position', position)
      setState({
        id: position.target.id,
        objetivo: position.target.value //? position.target.value : 'sem outros objetivos'
      })
    }
    console.log('objetivos: ', state)
    setListaObjetivos([...totalObjetivos, state])

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
  //console.log('Lista Resposta: ', JSON.stringify(listaObjetivos, null, 2))
  return (
    <>
      <h4>Objetivos Financeiros Imediatos</h4>
        {ObjetivosFinanceiros.map(({ id, objetivo }, index) => {
          return (
            <li key={index}>
              {objetivo !== 'Outros' ?
                <>
                  <Checkbox
                    id={id}
                    value={objetivo}
                    type={'checkbox'}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                    autoFocus={true} 
                    className="p-checkbok-success p-checkox-sm"/>

                  <label>{objetivo}</label>
                </>
                  : 
                <InputText style={{ width: '100%' }}
                  id={id}
                  onChange={ (e) => handleOnChange(e) } 
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

        <br/>
        <Button  className="p-button-success p-button-sm" onClick={() => props.triggerNextStep({id: 'r29', message:'lista_respostas', value: listaObjetivos, 
        trigger: 'q30' })}> Prosseguir </Button>
      
    </>
  );
}
export default SelecionaObjetivos