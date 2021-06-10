import React, { useState } from "react";

// Fragment: Nodo principal que tiene como caracteristica no crear una estructura dentro de la UI
// DOM: Document object model
// Virtual DOM
const Counter = () => {
  // useState(0)-> return [variable , funcion]
  // useDebugValue
  const [counter, setCounter] = useState(0);

  const increment = () => {
    console.log("%c Incrementar :D", "color:tomato");
    setCounter(counter + 1);
    console.log(counter);
  };

  const decrement = () => {
    console.log("%c Decrementar :D", "color:rebeccapurple");
    setCounter(counter - 1);
  };
  return (
    <>
      <h3>Contador</h3>
      <h4>Cuenta: {counter}</h4>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
};

export default Counter;
