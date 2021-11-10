import { TASK_COMPLETED } from "../constants";

export const taskCompleted = (todo) => ({
    type: TASK_COMPLETED,
    payload: todo,
});