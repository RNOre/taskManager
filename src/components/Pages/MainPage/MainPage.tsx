import classes from "./MainPage.module.css";
import TaskItem from "../../Task/TaskItem.tsx";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";
import {useEffect, useState} from "react";

const MainPage = () => {

    useEffect(() => {
        setTimeout(()=>setLoading(false), 200)
    }, [])

    const [loading, setLoading] = useState(true);

    const state = useTypedSelector(state => state.tasks);

    return (
        <div className={`container ${classes.mainPage}`}>
            {loading ? <h1>Loading...</h1> :
                <div>
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
                            {state.filter(state => !state.highPriority).map(task =>
                                <TaskItem key={task.id} id={task.id} title={task.title} highPriority={task.highPriority}
                                          deadline={task.deadline}/>
                            )}
                        </div>
                        <div className={classes.topPriority}>
                            {state.filter(state => state.highPriority).map(task =>
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

export default MainPage;