import {ItaskState, TaskActions, TaskActionTypes} from "../../types/taskTypes.ts";
import taskItem from "../../components/Task/TaskItem.tsx";

const initialState: ItaskState = {
    tasks: [
        {
            id: "1",
            title: "task 1",
            deadline: "2021-07-01",
            highPriority: false
        },
        {
            id: "2",
            title: "task 2",
            deadline: "",
            highPriority: false
        },
        {
            id: "3",
            title: "task 3",
            deadline: "",
            highPriority: true
        },
        {
            id: "4",
            title: "task 4",
            deadline: "",
            highPriority: false
        },
    ]
};

export const taskReducer = (state = initialState, action: TaskActions): ItaskState => {
    switch (action.type) {
        case TaskActionTypes.CREATE_NEW_TASKS:
            console.log(action.payload);
            const newTask = action.payload;
            return {...state, tasks: [...state.tasks, newTask]};
        case TaskActionTypes.DELETE_TASK:
            console.log(action.payload);
            const newTasks = state.tasks.filter(task=>task.id!==action.payload);
            return {...state, tasks: newTasks};
        default:
            return state;
    }
}

export const createNewTask = (payload: any) => ({type: TaskActionTypes.CREATE_NEW_TASKS, payload})
export const deleteTask = (payload: string) => ({type: TaskActionTypes.DELETE_TASK, payload})
