import classes from "./MonthPage.module.css";
import TaskItem from "../../Task/TaskItem.tsx";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";

const MonthPage =()=>{

    const state = useTypedSelector(state=>state.tasks);

    return(
        <div className={`container ${classes.monthPage}`}>
            <div className={classes.titleWrapper}>
                <h1 className={classes.title}>
                    Month`s tasks
                </h1>
            </div>
            <div className={classes.taskGroupWrapper}>
                <div className={classes.monthTasks}>
                    {state.map(task=>
                        <TaskItem key={task.id} id={task.id} title={task.title} highPriority={task.highPriority} deadline={task.deadline}/>
                    )}
                </div>
            </div>

        </div>
    )
}

export default MonthPage;