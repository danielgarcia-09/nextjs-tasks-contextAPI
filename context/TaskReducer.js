import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from "./TaskActions";

export const TaskReducer = (state, action) => {
    switch(action.type) {
        case CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case UPDATE_TASK:
            const { id } = action.payload;
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === id ? action.payload : task)
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
    }
}