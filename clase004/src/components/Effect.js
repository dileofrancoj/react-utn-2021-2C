// Componente se monta (ngOnInit -> constructor) -> API
// Actualización (ngOnUpdate) -> API
// Muerte o desmontaje (ngOnDestroy)
import { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const Effect = () => {
  const { increment, decrement, counter } = useCounter();
  const [name, setName] = useState("");

  // control de dependencias
  useEffect(() => {
    // Llamada a la API de personajes
    // En el montaje y en la actualización
    console.log("%c Me ejecuto solo al inicio", "color:red");
  }, []);

  useEffect(() => {
    // llamada api de favoritos
    console.log("%c Yo me ejecuto cuando se dispara increment", "color:blue");
  }, [counter]);

  useEffect(() => {
    console.log("Yo me ejecuto cuando cambia el name ");
  }, [name]);

  const handleInput = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h3>useEffect</h3>
      <h4>Contador: {counter}</h4>
      <h4>Nombre: {name}</h4>
      <button type="button" onClick={increment}>
        +1
      </button>
      <button type="button" onClick={decrement}>
        -1
      </button>

      <input type="text" placeholder="nombre..." onChange={handleInput} />
    </>
  );
};

export default Effect;
