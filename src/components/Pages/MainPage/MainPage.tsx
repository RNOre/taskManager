import classes from "./MainPage.module.css";
import TaskItem from "../../Task/TaskItem.tsx";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";
import {useEffect, useState} from "react";
import DragModal from "./Modal/DragModal.tsx";

const MainPage = () => {

    useEffect(() => {
        setTimeout(() => setLoading(false), 200)
    }, [])

    const [loading, setLoading] = useState(true);
    const state = useTypedSelector(state => state.tasks);

    const [currentItem, setCurrentItem] = useState("");
    const [dragModal, setDragModal] = useState(false);
    const [goldDragModal, setGoldDragModal] = useState(false);

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
                            {dragModal ?
                                <DragModal currentId={currentItem} gold={false}  closeDragModal = {()=>setGoldDragModal(false)}/> : <></>}
                            {state.filter(state => !state.highPriority).map(task =>
                                <TaskItem setModal={setGoldDragModal} setCurrentItem={setCurrentItem}
                                          key={task.id} id={task.id} title={task.title}
                                          highPriority={task.highPriority}
                                          deadline={task.deadline}/>
                            )}
                        </div>
                        <div className={classes.topPriority}>
                            {goldDragModal ?
                                <DragModal currentId={currentItem} gold={true} closeDragModal = {()=>setDragModal(false)}/> : <></>}
                            {state.filter(state => state.highPriority).map(task =>
                                <TaskItem setModal={setDragModal} setCurrentItem={setCurrentItem}
                                          key={task.id} id={task.id} title={task.title}
                                          highPriority={task.highPriority}
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