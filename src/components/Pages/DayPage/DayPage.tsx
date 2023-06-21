import classes from "./DayPage.module.css";
import TaskItem from "../../Task/TaskItem.tsx";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";

const DayPage =()=>{

    const state = useTypedSelector(state=>state.tasks);

    return(
        <div className={`container ${classes.dayPage}`}>
            <div className={classes.titleWrapper}>
                <h1 className={classes.title}>
                    Today`s tasks
                </h1>
            </div>
            <div className={classes.taskGroupWrapper}>
                <div className={classes.todayTasks}>
                    {state.map(task=>
                        <TaskItem key={task.id} id={task.id} title={task.title} highPriority={task.highPriority} deadline={task.deadline}/>
                    )}
                </div>
            </div>

        </div>
    )
}

export default DayPage;