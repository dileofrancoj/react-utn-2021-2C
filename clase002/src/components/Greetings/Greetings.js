// Componentes de presentacion
const Greetings = ({ name, lastname }) => {
  return (
    <p>
      Agradecimientos a todos los alumnos del curso 🚀 en especial a {name}{" "}
      {lastname}
    </p>
  );
};

export default Greetings;
