import classes from "./TaskItem.module.css";
import React from "react";
import {Button, Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {deleteTask} from "../../store/reducers/taskReducer.ts";

interface ITaskItem {
    id: string,
    title: string,
    deadline: string,
    highPriority: boolean,
    setCurrentItem?: (a: string) => void,
    setModal?: (a: boolean) => void
}

const TaskItem: React.FC<ITaskItem> = ({setModal, id, deadline, highPriority, title, setCurrentItem}: ITaskItem) => {

    const dispatch = useDispatch();


    function dragEndHandler() {
        if(typeof setModal!=="undefined"){
            setModal(false);
        }
    }

    function dragStartHandler() {
        if(typeof setModal!=="undefined"&&typeof setCurrentItem!=="undefined"){
            setModal(true)
            setCurrentItem(id);
        }

    }

    return (
        <Card draggable={true}
              onDragStart={() => dragStartHandler()}
              onDragEnd={() => dragEndHandler()}
              style={{width: '18rem', cursor: "pointer", zIndex: 1}}
              className={`${highPriority ? classes.highPriority : ""} card`}
            // className={"card"}
        >
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    deadline: {deadline}
                </Card.Text>
                <Button variant="primary" onClick={() => dispatch(deleteTask(id))}>Done!</Button>
            </Card.Body>
        </Card>
    )
}

export default TaskItem;