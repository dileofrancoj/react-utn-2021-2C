import { useState } from "react";
import ErrorMesage from "../ErrorMessage/ErrorMessage";
// TTI -> Time to interactive

const TaskForm = () => {
  const [error, setError] = useState(false);

  // las funciones que se disparan a través de eventos (recibe de forma implicita el evento)
  const addTask = (e) => {
    e.preventDefault();
    const [task] = e.target.elements;
    const taskValue = task.value.trim();

    if (taskValue === "") {
      setError(true);
      return;
    }
    setError(false);
    // TODO crear la tarea
  };

  return (
    <>
      <h3>Carga tu tarea</h3>
      <form onSubmit={addTask}>
        <input type="text" name="task" placeholder="Comprar pan..." />
        <br />
        <button type="submit">Cargar tarea</button>
      </form>
      <ErrorMesage visible={error} title="La tarea no puede estar vacía" />
    </>
  );
};

export default TaskForm;
