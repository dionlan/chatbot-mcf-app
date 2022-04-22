import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import './MultiSelectDemo.css';

import ObjetivosFinanceiros from '../utils/objetivosFinanceiros';
import { Checkbox } from 'primereact/checkbox';

function TesteCheckbox() {

    const [checkedState, setCheckedState] = useState(
        new Array(ObjetivosFinanceiros.length).fill(false)
    );

    const [listaObjetivos, setListaObjetivos] = useState([]);

    const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    let state = [];
    const totalObjetivos = updatedCheckedState.reduce(
        (previous, currentState, index) => {
          if (currentState === true) {
            return state += ObjetivosFinanceiros[index].objetivo + ' '
          }
          return previous
        }
      );
      setListaObjetivos(totalObjetivos)
    }
    console.log('Selecionado(s): ', listaObjetivos);

    return (
        <div className="multiselect-demo">
            {/*
            <div className="card">
            <h5>Objetivos Financeiros Imediatos</h5>
                <MultiSelect value={selecionado.selecionaObjetivos} 
                options={ObjetivosFinanceiros} 
                onChange={(e) => setSelecionado({ selecionaObjetivos: e.value })} 
                optionLabel="objetivo" placeholder="Selecione" maxSelectedLabels={3} />
            </div>
            <div>
                {`Items checked are: ${selecionado.selecionaObjetivos[0].objetivo}`}
            </div>  */}

            <ul>
                {ObjetivosFinanceiros.map(({ objetivo }, index) => {
                    return (
                    <li key={index}>
                        {objetivo !== 'Outros' ?
                            <>
                                <Checkbox
                                    id={`custom-checkbox-${index}`}
                                    value={objetivo}
                                    options={ObjetivosFinanceiros}
                                    type={'checkbox'}
                                    objetivo={objetivo}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{ ' '+objetivo}</label>
                            </>
                        : 
                            <InputText type="text" className="p-inputtext-sm" placeholder="Outros objetivos" />
                        }
                    </li>
                    );
                })}                 
                 
            </ul>
            <label>'Objetivos Selecionados: ' {listaObjetivos}</label>
        </div>
    )
}
export default TesteCheckbox