import { SET_TASK, UPDATE_TASK, DELETE_TASK, GET_TASK } from "../actions/tasks";
// id, name, description, createdAt
export const initialState = {
  tasks: [],
  selectedTask: {},
  owner: {},
};

// action : {type, payload}
export const tasksReducer = (state, action) => {
  switch (action.type) {
    case GET_TASK: {
      const selectedTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      return {
        ...state,
        selectedTask,
      };
    }

    case DELETE_TASK: {
      const tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      return {
        ...state,
        tasks,
      };
    }

    // {action: SET_TASK, payload : {task : {id, name, description}}
    case SET_TASK:
      return {
        ...state,
        tasks: [action.payload.task, ...state.tasks],
      };

    default:
      return state;
  }
};
