import {applyMiddleware, createStore} from "redux";
import {taskReducer} from "./reducers/taskReducer.ts";
import thunk from "redux-thunk";

export const store= createStore(taskReducer, applyMiddleware(thunk))