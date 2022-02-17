import React, { useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import './MultiSelectDemo.css';

function Teste() {

    const [selecionado, setSelecionado] = useState ({
        selectedCities: ''
    })

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    console.log(cities);

    return (
        <div className="multiselect-demo">
            <div className="card">
            <h5>Basic</h5>
                <MultiSelect value={selecionado.selectedCities} options={cities} onChange={(e) => setSelecionado({ selectedCities: e.value })} 
                optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />
                
            </div>
        </div>
    )
}
export default Teste