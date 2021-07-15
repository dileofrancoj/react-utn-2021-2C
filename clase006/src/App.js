import { useReducer } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import TaskForm from "./components/TaskForm/TaskForm";
import { initialState, tasksReducer } from "./reducers/tasks";

function App() {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  return (
    <div className="App">
      <Counter />
      <hr />
      <TaskForm />
    </div>
  );
}

export default App;
