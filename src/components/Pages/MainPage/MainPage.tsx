import classes from "./MainPage.module.css";
import TaskItem from "../../Task/TaskItem.tsx";

const MainPage =()=>{
    return(
        <div className={`container ${classes.mainPage}`}>
            <div className={classes.titleWrapper}>
                <h1 className={classes.title}>
                    All tasks
                </h1>
                <h1 className={classes.title}>
                    Top priority
                </h1>
            </div>
            <div className={classes.taskGroupWrapper}>
                <div className={classes.allTasks}>
                    <TaskItem/>
                    <TaskItem/>
                </div>
                <div className={classes.topPriority}>
                    <TaskItem/>
                </div>
            </div>

        </div>
    )
}

export default MainPage;