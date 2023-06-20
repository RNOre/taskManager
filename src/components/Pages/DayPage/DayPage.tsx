import classes from "./DayPage.module.css";
import TaskItem from "../../Task/TaskItem.tsx";

const DayPage =()=>{
    return(
        <div className={`container ${classes.dayPage}`}>
            <div className={classes.titleWrapper}>
                <h1 className={classes.title}>
                    Today`s tasks
                </h1>
            </div>
            <div className={classes.taskGroupWrapper}>
                <div className={classes.todayTasks}>
                    <TaskItem/>
                    <TaskItem/>
                    <TaskItem/>
                    <TaskItem/>
                    <TaskItem/>
                    <TaskItem/>
                    <TaskItem/>
                </div>
            </div>

        </div>
    )
}

export default DayPage;