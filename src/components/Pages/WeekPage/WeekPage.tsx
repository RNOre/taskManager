import classes from "./WeekPage.module.css";
import TaskItem from "../../Task/TaskItem.tsx";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";

const WeekPage =()=>{

    const state = useTypedSelector(state=>state.tasks);

    return(
        <div className={`container ${classes.weekPage}`}>
            <div className={classes.titleWrapper}>
                <h1 className={classes.title}>
                    Week`s tasks
                </h1>
            </div>
            <div className={classes.taskGroupWrapper}>
                <div className={classes.weekTasks}>
                    {state.map(task=>
                        <TaskItem key={task.id} id={task.id} title={task.title} highPriority={task.highPriority} deadline={task.deadline}/>
                    )}
                </div>
            </div>

        </div>
    )
}

export default WeekPage;