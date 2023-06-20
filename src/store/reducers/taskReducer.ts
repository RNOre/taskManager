import {ItaskState, TaskActions, TaskActionTypes} from "../../types/taskTypes.ts";

const initialState: ItaskState = {
    tasks: [
        {
            title: "task 1",
            deadline: "2021-07-01",
            highPriority: false
        },
        {
            title: "task 2",
            deadline: "",
            highPriority: false
        },
        {
            title: "task 3",
            deadline: "",
            highPriority: true
        },
        {
            title: "task 4",
            deadline: "",
            highPriority: false
        },
    ]
};

export const taskReducer = (state = initialState, action: TaskActions): ItaskState => {
    switch (action.type) {
        case TaskActionTypes.CREATE_NEW_TASKS:
            console.log("craeted");
            return state;
        default:
            return state;
    }
}

