import { useState } from 'react';
import { Button } from 'primereact/button';
import ObjetivosFinanceiros from '../utils/objetivosFinanceiros';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import './components.css'
import PessoaService from '../service/pessoaService';

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
 
    if (position.target){ //para obter os valores inseridos pelo usuario no inputText "outros objetivos financeiros"

      //console.log('position', position)
      //pegar o valor da última posição da lista de objetivos e obter o valor correspondente "String outros objetivos digitados pelo usuario, ou manter: sem outros objetivos financeiros"

      setState({
        itemObjetivo: 'Outros Objetivos: ' + position.target.value //? position.target.value : 'sem outros objetivos'
      })
    }else{
      setState({
        itemObjetivo: 'Sem Outros Objetivos.' //? position.target.value : 'sem outros objetivos'
      })
    }
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

  const pessoaService = new PessoaService()

  const personInput = props.respostas

  function cadastar() {
    let { previousStep } = props;
    const itemResponses = {
      question: previousStep.id,
      itemResponses: listaObjetivos
    }
    console.log('itemResponses SELECIONA OBJETIVOS: ', itemResponses)

    personInput.responses.push(itemResponses)
    
    console.log('lista PERSONINPUT', personInput)

    pessoaService.atualizarPessoa(personInput)

    console.log('Informações financeiras cadastradas com sucesso!')

    props.triggerNextStep({id: 'selecionaObjetivos', message:'lista_respostas', value:itemResponses, trigger: '17' })

    //console.log('CADASTRA OBJETIVOS FINANCEIROS', personInput)
    //pessoaService.atualizarPessoa(personInput)
    /*
    .then(response => {
      console.log('Informações financeiras cadastradas com sucesso!')
      props.triggerNextStep({id: 'selecionaObjetivos', message:'lista_respostas', value: listaObjetivos, trigger: 'q30' })
    }).catch(error => {
      console.log('ERRO!', error)
    }) */

    //console.log('PROPS CADASTRA OBJETIVOS FINANCEIROS', personInput)
  }
  
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
        {/* 
        <div>
          <label><strong>Objetivos Selecionados:  </strong>{JSON.stringify(listaObjetivos)}</label>
          <label><strong>Outros:  </strong>{JSON.stringify(state)}</label>
        </div>
        <div>
          <label><strong>Nota Final: </strong>{`${notaFinal.toFixed(2)}`}</label>  código javascript em HTML {`${javascript}`} 
        </div>
      */}
        <br/>
        <Button className="p-button-success p-button-sm" onClick={cadastar}> Prosseguir </Button>
    </>
  );
}
export default SelecionaObjetivos