import parse from "date-fns/parse";
import {compareDesc, endOfMonth, isDate, nextSunday} from "date-fns";
import {useTypedSelector} from "../hooks/useTypedSelector.ts";
import {taskItem} from "../types/taskTypes.ts";

export const typeOfCreatedDate = (deadline: string): string => {
    let dateForDispatch: string = "";
    const currentDate = new Date();
    const date = parse(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`, "yyyy-MM-dd", new Date());
    switch (deadline) {
        case "day":
            dateForDispatch = "today";
            break;
        case "week":
            const endOfWeek = nextSunday(date);
            dateForDispatch = `${endOfWeek.getFullYear()}-${endOfWeek.getMonth() + 1}-${endOfWeek.getDate()}`;
            break;
        case "month":
            const monthLastDay = endOfMonth(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 1, 0, 0))
            dateForDispatch = `${monthLastDay.getFullYear()}-${monthLastDay.getMonth() + 1}-${monthLastDay.getDate()}`;
            break;
        default:
            dateForDispatch = deadline;
    }
    return dateForDispatch;
}

export const typeOfDate = (deadline: string, firstDate: string = "", secondDate: string = "") => {
    const tasks = useTypedSelector(state => state.tasks);
    let newTaskList: taskItem[] = [];
    switch (deadline) {
        case "today":
            return tasks.filter(task => task.deadline === "today");
        case "week":
            for (let task of tasks) {
                if (task.deadline === "today") {
                    newTaskList.push(task);
                } else {
                    if (calcDate("week", task.deadline)) {
                        newTaskList.push(task);
                    }
                }
            }
            return newTaskList;
        case "month":
            for (let task of tasks) {
                if (task.deadline === "today") {
                    newTaskList.push(task);
                } else if (calcDate("month", task.deadline)) {
                    newTaskList.push(task);
                }
            }
            return newTaskList;
        case "variable":
            for (let task of tasks) {
                if (calcDate("variable", task.deadline, firstDate, secondDate)) {
                    newTaskList.push(task)
                }

            }
            return newTaskList;
        default:
            return [];
    }
}

const calcDate = (deadline: string, deadlineDate: string, firstDateStr: string = "", secondDateStr: string = "") => {
    const date = parse(deadlineDate, "yyyy-MM-dd", new Date());
    let currentDate = new Date();
    currentDate = parse(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`, "yyyy-MM-dd", new Date());
    const endOfWeek = nextSunday(currentDate);
    const monthLastDay = endOfMonth(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 1, 0, 0))
    const firstDate = parse(firstDateStr, "yyyy-MM-dd", new Date());
    const secondDate = parse(secondDateStr, "yyyy-MM-dd", new Date());
    if (deadline === "week") {
        return (compareDesc(date, endOfWeek) === 1 || compareDesc(date, endOfWeek) === 0)
    } else if (deadline === "month") {
        return (compareDesc(date, monthLastDay) === 1 || compareDesc(date, monthLastDay) === 0)
    }
    if (deadline === "variable") {
        if (deadlineDate === "today") {
            return !compareDesc(currentDate, firstDate)
        }
        return (compareDesc(firstDate, date) === 1 || compareDesc(firstDate, date) === 0) && (compareDesc(date, secondDate) === 1 || compareDesc(date, secondDate) === 0)
    }
}

export const specCheck = (deadline: string) => {
    let currentDate = new Date();
    currentDate = parse(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`, "yyyy-MM-dd", new Date());
    const date = parse(deadline, "yyyy-MM-dd", new Date());

    if (!compareDesc(date, currentDate)) {

        return "today";
    }
    return compareDesc(date, currentDate) === -1;
}