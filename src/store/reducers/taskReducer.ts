import {ItaskState, TaskActions, TaskActionTypes} from "../../types/taskTypes.ts";

const initialState: ItaskState = {
    tasks: [
        {
            id: "1",
            title: "task 1",
            deadline: "2023-06-27",
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
            deadline: "2023-07-01",
            highPriority: false
        },
    ]
};

export const taskReducer = (state = initialState, action: TaskActions): ItaskState => {
    switch (action.type) {
        case TaskActionTypes.CREATE_NEW_TASKS: {
            const newTask = action.payload;
            return {...state, tasks: [...state.tasks, newTask]};
        }
        case TaskActionTypes.DELETE_TASK: {
            const newTasks = state.tasks.filter(task => task.id !== action.payload);
            return {...state, tasks: newTasks};
        }
        case TaskActionTypes.CHANGE_PRIORITY: {
            console.log(action.payload);
            for (const task of state.tasks) {
                if (task.id === action.payload) {
                    task.highPriority = !task.highPriority
                }
            }
            return {...state}
        }
        default: {
            return state;
        }
    }
}

export const createNewTask = (payload: any) => ({type: TaskActionTypes.CREATE_NEW_TASKS, payload})
export const deleteTask = (payload: string) => ({type: TaskActionTypes.DELETE_TASK, payload})
export const changePriority = (payload: string) =>({type:TaskActionTypes.CHANGE_PRIORITY, payload})
