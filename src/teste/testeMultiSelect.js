import React, { useState } from 'react';
import './MultiSelectDemo.css';
import { MultiSelect } from 'primereact/multiselect';
import ObjetivosFinanceiros from '../utils/objetivosFinanceiros';

function TesteMultiSelect() {
    const [objetivos, setObjetivos] = useState([]);
    const notaFinal = objetivos.reduce((total, currentValue) => total = total + currentValue.nota, 0)
    console.log(notaFinal)
    return (
        <div>
            <h3>Objetivos Financeiros Imediatos</h3>
                <MultiSelect value={objetivos} 
                options={ObjetivosFinanceiros} 
                onChange={(e) => setObjetivos(e.value)} 
                optionLabel="objetivo" 
                placeholder="Selecione" 
                maxSelectedLabels={2} />
        <ul className="multiselect-demo">
        Objetivos Selecionados:
        <div>
            {objetivos.map((item, index) => (
                <li key={index}>
                    <label>{item.objetivo}</label> 
                </li>
            ))}
        </div>
        <label>Nota Final: {notaFinal}</label>
        </ul>
    </div>
    )
}
export default TesteMultiSelect