import {taskReducer} from "../store/reducers/taskReducer.ts";

export interface ItaskState {
    tasks: Array<taskItem>
}

export interface taskItem {
    id: string,
    title: string,
    deadline: string,
    highPriority: boolean
}

export const enum TaskActionTypes {
    CREATE_NEW_TASKS = "CREATE_NEW_TASKS",
    DELETE_TASK = "DELETE_TASK"
}

interface createNewTask {
    type: TaskActionTypes.CREATE_NEW_TASKS
    payload: taskItem
}

interface deleteTask {
    type: TaskActionTypes.DELETE_TASK
    payload:string
}

export type RootState = ReturnType<typeof taskReducer>

export type TaskActions = createNewTask|deleteTask;