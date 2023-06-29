import classes from "./TaskItem.module.css";
import React from "react";
import {Button, Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {deleteTask} from "../../store/reducers/taskReducer.ts";
import {Simulate} from "react-dom/test-utils";
import dragOver = Simulate.dragOver;
import {taskItem} from "../../types/taskTypes.ts";
import {an} from "vitest/dist/types-2b1c412e";

interface ItaskItem {
    id: string,
    title: string,
    deadline: string,
    highPriority: boolean,
    tasks:Array<taskItem>,
    item: taskItem,
    setCurrentBoard: any,
    setCurrentItem: any,
    currentItem:any,
    currentBoard:any,
    setTasks:any,
    onDragModal:any,
    offDragModal: any
}

const TaskItem: React.FC<ItaskItem> = ({offDragModal, onDragModal,setTasks, currentItem, currentBoard,id, deadline, highPriority, title, tasks, item, setCurrentItem, setCurrentBoard}: ItaskItem) => {

    const dispatch = useDispatch();

    function dragOverHandler(e: any) {
        e.preventDefault();
        // console.log(e)
        if(e.target.className==="card-body"){
            console.log("card-body")
            e.target.style.boxShadow = "0 4px 3px gray"
        }
        if(e.target.className==="Dragmodal"){
            console.log("modal")
            e.target.style.boxShadow = "0 4px 3px gray"
        }

    }

    function dragLeaveHandler(e:any, tasks: Array<taskItem>, item: taskItem) {
        e.target.style.boxShadow = "none"
    }

    function dragEndHandler(e: any) {
        e.target.style.boxShadow = "none"
    }

    function dropHandler(e: React.DragEvent<HTMLElement>, tasks: Array<taskItem>, item: taskItem) {
        e.preventDefault();
        offDragModal();
        e.target.style.boxShadow = "none"
        // const currentIndex = setCurrentBoard.items.indexOf(currentItem);
        // currentBoard.items.splice(currentIndex,1);
        // const dropIndex = tasks.items.indexOf(item);
        // tasks.items.splice(dropIndex+1,0,currentIndex);
        // setTasks(tasks.map(b=>{
        //     if(b.id===tasks.id)
        // }))
        // if()
        console.log(e)
    }

    function dragStartHandler(e: React.DragEvent<HTMLElement>, tasks: Array<taskItem>, item: taskItem) {
        console.log(id);
        onDragModal();
        setCurrentBoard(tasks);
        setCurrentItem(id);
    }

    return (
        <Card draggable={true}
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e)=>dragLeaveHandler(e, tasks, item)}
              onDragStart={(e)=>dragStartHandler(e, tasks, item, id)}
              onDragEnd = {(e)=>dragEndHandler(e)}
              onDrop={(e)=>dropHandler(e, tasks, item)}
              style={{width: '18rem', cursor: "pointer", zIndex:3}}
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