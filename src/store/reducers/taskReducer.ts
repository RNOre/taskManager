import {ItaskState, TaskActions, TaskActionTypes} from "../../types/taskTypes.ts";

const initialState: ItaskState = {
    tasks: [
        {
            id: "1",
            title: "task 1",
            deadline: "2023-06-24",
            highPriority: false
        },
        {
            id: "2",
            title: "task 2",
            deadline: "today",
            highPriority: false
        },
        {
            id: "3",
            title: "task 3",
            deadline: "today",
            highPriority: true
        },
        {
            id: "4",
            title: "task 4",
            deadline: "2023-06-29",
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
