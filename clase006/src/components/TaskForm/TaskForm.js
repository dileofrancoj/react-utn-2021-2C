import { useForm } from "react-hook-form";

const TaskForm = ({ addTask }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ reValidateMode: "onSubmit" });
  const createTask = (task) => {
    console.log(task);
    // addTask
  };
  console.log(errors);
  return (
    <>
      <h2>Formulario de tareas</h2>
      <form onSubmit={handleSubmit(createTask)}>
        <div>
          <input
            type="text"
            placeholder="Tarea"
            {...register("task", { required: true })}
          />
          {errors?.task && <span>Este campo es obligatorio</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          {errors?.description && <span>La descripcion es obligatoria</span>}
        </div>
        <button type="submit">Agregar tarea</button>
      </form>
    </>
  );
};

export default TaskForm;
