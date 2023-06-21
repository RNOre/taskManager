import classes from "./CreateTask.module.css";
import React, {useState} from "react";
import {Button, Form, FormControl} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {createNewTask} from "../../../store/reducers/taskReducer.ts";
import {v4 as uuidv4} from 'uuid';
import parse from "date-fns/parse"
import {nextSunday} from "date-fns";

const CreateTask = (props: any) => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [deadline, setDeadline] = useState("day");
    const [highPriority, setHighPriority] = useState(false)

    const [datePickerToogle, setDatePickerToogle] = useState(true);

    const changeDeadline = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.target.value === "specific" ? setDatePickerToogle(false) : setDatePickerToogle(true);
        if (event.target.value !== "specific") {
            setDatePickerToogle(true);
            setDeadline(event.target.value);
        } else {
            setDatePickerToogle(false);
        }
    }

    const dateTest = (event: React.ChangeEvent<FormControlElement>) => {
        setDeadline(event.target.value);

    }

    const createTask = () => {
        if (title.trim()) {
            const id = uuidv4();
            const trimTitle = title.trim();
            let dateForDispatch: string = "";
            // const date = parse(deadline, "yyyy-MM-dd", new Date());
            switch (deadline) {
                case "day":
                    dateForDispatch = "today";
                    break;
                case "week":
                    const currentDate = new Date();
                    // console.log(`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`)
                    const date = parse(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`, "yyyy-MM-dd", new Date());
                    const newDate = nextSunday(date);
                    console.log(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`)
                    dateForDispatch = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
                    break;
            }
            console.log(deadline)
            dispatch(createNewTask({id, title: trimTitle, deadline: dateForDispatch, highPriority}));
            // const date = parse(deadline, "yyyy-MM-dd", new Date());
            // props.closeModal()
        } else {
            alert("Enter title!")
        }
    }


    return (
        <div className={classes.taskModal}>
            <div className={classes.background}/>
            <Form className={classes.form}>
                <svg onClick={() => props.closeModal()} xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                     fill="currentColor"
                     className={`bi bi-x-lg ${classes.closeButton}`} viewBox="0 0 16 16">
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                <h1 className="mb-3">Add new task</h1>
                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title}
                                  onChange={(event: React.ChangeEvent<FormControlElement>) => {
                                      setTitle(event.target.value)
                                  }}/>
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
                    <FormControl disabled={datePickerToogle} type="date" value={deadline} onChange={dateTest}/>
                    {/*<FormControl disabled={datePickerToogle} type="date" value={deadline} onChange={(event: React.ChangeEvent<FormControlElement>)=>{setDeadline(event.target.value)}}/>*/}
                    <Form.Text className="text-muted">
                        *Available for specific date
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="High priority" checked={highPriority}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setHighPriority(event.target.checked)
                                }}/>
                </Form.Group>
                <Button variant="primary" onClick={createTask}>
                    Create
                </Button>
            </Form>
        </div>
    )
}

export default CreateTask;