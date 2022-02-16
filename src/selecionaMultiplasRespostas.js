import { useState } from "react";
import { toppings } from "./utils/toppings";
import './App.css';

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

const getFormattedNames = (name) => `${JSON.stringify(name)}`;

export default function SelecionaMultiplasRespostas (props) {
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const [names, setNames] = useState([]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    const totalNames = updatedCheckedState.reduce(
        (names, currentState, index) => {
          if (currentState === true) {
            return names + toppings[index].name;
          }
          return names;
        },
        0
      );

    console.log('NOMES SELECIONADOS: ', totalNames)
    setNames(totalNames);
    setTotal(totalPrice);
  };

  return (
    
    <div>
      <h3>Objetivos Financeiros Imediatos</h3>
      <ul>
        {toppings.map(({ name }, index) => {
          return (
            <li key={index}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
            </li>
          );
        })}
        <li>
            <div>Total:</div>
            <div>{getFormattedPrice(total)}</div>
            <div>{getFormattedNames(JSON.stringify(names))}</div>
            <button onClick={() => props.triggerNextStep({id: 'objetivosFinanceirosImediatos', value: names, trigger: 'resumo' })}>Next</button>
        </li>
      </ul>
    </div>
  );
}
