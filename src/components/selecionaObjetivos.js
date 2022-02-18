import { useState } from "react";
import { Button } from 'primereact/button';
import ObjetivosFinanceiros from "../utils/objetivosFinanceiros";
import './components.css'
import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from 'primereact/multiselect';

const getFormattedNota = (nota) => `${nota.toFixed(2)}`;

function SelecionaObjetivos (props) {
  const [checkedState, setCheckedState] = useState(
    new Array(ObjetivosFinanceiros.length).fill(false)
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
          return state += ObjetivosFinanceiros[index].objetivo + ' '
        }
        return obj
      }
    );
    
    setCheckedState(updatedCheckedState);
    setObjetivos(totalObjetivos)

    const totalNota = updatedCheckedState.reduce(
      (obj, currentState, index) => {
        if (currentState === true) {
          return obj + ObjetivosFinanceiros[index].nota;
        }
        return obj;
      },
      0
    ); 
    setTotal(totalNota);
  };

  const [selecionado, setSelecionado] = useState ([])

  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const isChecked = (item) =>
  checked.includes(item) ? true: false;
  var checkedItems = checked.length
  ? checked.reduce((total, item) => {
      return total + ", " + item;
    })
  : "";
console.log(selecionado)
const listaObjetivos = selecionado.map((objetivos) => {
  return ' '+objetivos.objetivo;
});

  function onCityChange(e) {
    let selectedObjetivos= [...selecionado];

    if (e.checked)
      selectedObjetivos.push(e.value);
    else
      selectedObjetivos.splice(selectedObjetivos.indexOf(e.value), 1);

    setSelecionado({ selecionado: selectedObjetivos });
}
  return (
    <div>
      <h3>Objetivos Financeiros Imediatos</h3>
      {ObjetivosFinanceiros.map((objetivo) => {
    
            <div key={objetivo.objetivo} className="field-checkbox">
              <Checkbox inputId={objetivo.objetivo} name="objetivo" value={objetivo} onChange={onCityChange} checked={e => setChecked( {checked: e.checked }) } 
              options={ObjetivosFinanceiros} />
              <label htmlFor={objetivo.objetivo}>{objetivo.objetivo}</label>
            </div>
          
      })}

      <div>
        <div className="multiselect-demo">  
          <Checkbox value={selecionado} 
              options={ObjetivosFinanceiros} 
              onChange={ (e) => setSelecionado( e.value)} 
              optionLabel="objetivo" 
              placeholder="Selecione" />
        </div>
      {`listaObjetivos: ${listaObjetivos}`}
      </div>
      <br/>
  
        
      <br/>
      <div>
        <Button className="p-button-success p-button-sm" onClick={() => props.triggerNextStep({id: 'objetivosFinanceirosImediatos', 
            value: objetivos.selecionados, trigger: 'resumo' })}>
            Prosseguir
        </Button>
      </div>
    </div>
  );
}
export default SelecionaObjetivos