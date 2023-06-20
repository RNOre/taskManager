import classes from "./CreateTask.module.css";
import React, {useState} from "react";
import {Button, Form, FormControl} from "react-bootstrap";

const CreateTask = (props:any) =>{

    const [datePickerToogle, setDatePickerToogle] = useState(true);

    const changeDeadline = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        event.target.value==="specific"?setDatePickerToogle(false):setDatePickerToogle(true);
    }


    return(
        <div className={classes.taskModal}>
            <div className={classes.background}/>
            <Form className={classes.form}>
                <svg onClick={()=>props.closeModal()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className={`bi bi-x-lg ${classes.closeButton}`} viewBox="0 0 16 16">
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                <h1 className="mb-3">Add new task</h1>
                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Select onChange={changeDeadline}>
                        <option value="day">for a day</option>
                        <option value="week">for a week</option>
                        <option value="month">for a month</option>
                        <option value="specific">specific date</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <FormControl disabled={datePickerToogle} type="date"/>
                    <Form.Text className="text-muted">
                        *Available for specific date
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="High priority" />
                </Form.Group>
                <Button variant="primary">
                    Create
                </Button>
            </Form>
        </div>
    )
}

export default CreateTask;