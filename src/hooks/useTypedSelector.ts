import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../types/taskTypes.ts";

export const useTypedSelector:TypedUseSelectorHook<RootState>= useSelector;