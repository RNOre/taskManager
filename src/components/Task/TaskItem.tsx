import classes from "./TaskItem.module.css";
import React from "react";
import {Button, Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {deleteTask} from "../../store/reducers/taskReducer.ts";

interface ItaskItem {
    id:string,
    title:string,
    deadline: string,
    highPriority: boolean
}
const TaskItem:React.FC<ItaskItem> = ({id, deadline, highPriority, title}:ItaskItem) =>{

    const dispatch = useDispatch();

    return(
        <Card style={{ width: '18rem', cursor:"pointer" }} className={highPriority?classes.highPriority:""}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    deadline: {deadline}
                </Card.Text>
                <Button variant="primary" onClick={()=>dispatch(deleteTask(id))}>Done!</Button>
            </Card.Body>
        </Card>
    )
}

export default TaskItem;