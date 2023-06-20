import {taskReducer} from "../store/reducers/taskReducer.ts";

export interface ItaskState {
    tasks: Array<taskItem>
}

interface taskItem {
    title: string,
    deadline: string,
    highPriority: boolean
}

export const enum TaskActionTypes {
    CREATE_NEW_TASKS = "CREATE_NEW_TASKS"
}

interface createNewTasks{
    type: TaskActionTypes.CREATE_NEW_TASKS
}

export type RootState=ReturnType<typeof taskReducer>

export type TaskActions = createNewTasks;