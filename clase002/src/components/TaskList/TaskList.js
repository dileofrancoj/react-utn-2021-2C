// Arrow vs functions
// 1. Tiene return implicito
// 2. Sintaxis
// 3. Manejo operador this
// [{},{},{}]
const TaskList = ({ tasks }) => {
  return (
    <>
      {tasks.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
      {tasks.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
    </>
  );
};

export default TaskList;
