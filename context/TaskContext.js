import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from "./TaskActions";
import { TaskReducer } from "./TaskReducer";
import { createContext, useReducer, useContext } from 'react'

const TaskContext = createContext();

const initialState = {
    tasks: [{id: "1239123kcdaasd", title: "Watch cobra kai", description: "sept 9, im excited :)"}],
}

export const TaskProvider = ({children}) => {

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const createTask = (task) => {
        dispatch({
            type: CREATE_TASK,
            payload: task
        })
    }

    const updateTask = (task) => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    const deleteTask = (id) => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }
    return (
        <TaskContext.Provider
            value={{
                ...state,
                createTask,
                updateTask,
                deleteTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = () => useContext(TaskContext);