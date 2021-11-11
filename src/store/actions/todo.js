import { TASK_COMPLETED, ADD_TASK, EDIT_TASK, DELETE_TASK } from "../constants";

export const taskCompleted = (todo) => ({
    type: TASK_COMPLETED,
    payload: todo,
});

export const addTask = (todo) => ({
    type: ADD_TASK,
    payload: todo
});

export const updateTask = (todo) => ({
  type: EDIT_TASK,
  payload: todo,
});

export const deleteTask = (todo) => ({
  type: DELETE_TASK,
  payload: todo,
});