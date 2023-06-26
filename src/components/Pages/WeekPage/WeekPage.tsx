import classes from "./WeekPage.module.css";
import TaskItem from "../../Task/TaskItem.tsx";
import {typeOfDate} from "../../../Service/DataService.ts";
import {useEffect, useState} from "react";

const WeekPage = () => {

    useEffect(() => {
        setTimeout(() => setLoading(false), 200)
    }, [])

    const [loading, setLoading] = useState(true);
    const state = typeOfDate("week");

    return (
        <div className={`container ${classes.weekPage}`}>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <div className={classes.titleWrapper}>
                        <h1 className={classes.title}>
                            Week`s tasks
                        </h1>
                    </div>
                    <div className={classes.taskGroupWrapper}>
                        <div className={classes.weekTasks}>
                            {state.sort((a, b) => Number(b.highPriority) - Number(a.highPriority)).map(task =>
                                <TaskItem key={task.id} id={task.id} title={task.title} highPriority={task.highPriority}
                                          deadline={task.deadline}/>
                            )}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default WeekPage;