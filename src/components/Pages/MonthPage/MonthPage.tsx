import classes from "./MonthPage.module.css";
import TaskItem from "../../Task/TaskItem.tsx";
import {typeOfDate} from "../../../Service/DataService.ts";
import {useEffect, useState} from "react";

const MonthPage = () => {

    useEffect(() => {
        setTimeout(() => setLoading(false), 200)
    }, [])

    const [loading, setLoading] = useState(true);
    const state = typeOfDate("month");

    return (
        <div className={`container ${classes.monthPage}`}>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <div className={classes.titleWrapper}>
                        <h1 className={classes.title}>
                            Month`s tasks
                        </h1>
                    </div>
                    <div className={classes.taskGroupWrapper}>
                        <div className={classes.monthTasks}>
                            {state.map(task =>
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

export default MonthPage;