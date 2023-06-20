import "./TaskItem.module.css";
import React from "react";
import {Button, Card} from "react-bootstrap";

const TaskItem:React.FC = () =>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    deadline: 23.03.2024
                </Card.Text>
                <Button variant="primary">Done!</Button>
            </Card.Body>
        </Card>
    )
}

export default TaskItem;