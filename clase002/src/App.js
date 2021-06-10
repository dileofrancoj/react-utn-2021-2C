import "./App.css";
// import Counter from "./components/Counter/Counter";
// import Greetings from "./components/Greetings/Greetings";

import TaskForm from "./components/TaskForm/";
import TaskList from "./components/TaskList";

const tasks = [
  { id: 1, name: "Comprar pan" },
  { id: 2, name: "Vender pan" },
  { id: 3, name: "Enseñar react" },
];

const App = () => {
  return (
    <div className="App">
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
