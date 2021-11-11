import { DELETE_TASK, ADD_TASK, TASK_COMPLETED, EDIT_TASK } from "../constants";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    {
      id: 1,
      task: "Write some code",
      isComplete: false,
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: uuidv4(),
        task: action.payload,
        isComplete: false,
      };

      const taskAdded = [...state.todos, newTask];
      return {
        ...state,
        todos: taskAdded,
      };

    case DELETE_TASK:
      const filterTodo = state.todos.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        todos: filterTodo,
      };

    case EDIT_TASK:
      const updatedTasks = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, task: action.payload.updateTask };
        }
        return item;
      });
      return {
        ...state,
        todos: updatedTasks,
      };

    case TASK_COMPLETED:
      const toggleTodo = state.todos.map((item) =>
        item.id === action.payload.id
          ? { ...action.payload, isComplete: !action.payload.isComplete }
          : item
      );
      return {
        ...state,
        todos: toggleTodo,
      };
    default:
      return state;
  }
};
