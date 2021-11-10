import { TASK_COMPLETED } from "../constants";

const initialState = {
    todos: [
        {
            id: 1,
            task: "Write some code",
            isComplete: false
        }
    ]
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_COMPLETED :
            return {
                ...state,
            };
            default:
                return state;
    }
}