import classes from "./CreateTask.module.css";
import React, { useEffect, useState} from "react";
import {Button, Form, FormControl} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {createNewTask} from "../../../store/reducers/taskReducer.ts";
import {v4 as uuidv4} from 'uuid';
import {specCheck, typeOfCreatedDate} from "../../../Service/DataService.ts";

const CreateTask = (props: any) => {

    const [loading, setLoading] = useState(false);
    const [created, setCreated] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // setLoading(true);
        console.log("eff")
        setTimeout(() => {
                setLoading(false);
                console.log("add")
            }
            , 2000)
    }, [created])

    const [title, setTitle] = useState("");
    const [deadline, setDeadline] = useState("day");
    const [highPriority, setHighPriority] = useState(false)

    const [datePickerToogle, setDatePickerToogle] = useState(true);

    const changeDeadline = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.target.value === "specific" ? setDatePickerToogle(false) : setDatePickerToogle(true);
        setDeadline(event.target.value);
        console.log(deadline)
        // if (event.target.value !== "specific") {
        //     console.log(event.target.value)
        //     setDeadline(event.target.value)
        //     setDatePickerToogle(false);
        //     // setDeadline(event.target.value);
        // } else {
        //     console.log(event.target.value)
        //     setDeadline(event.target.value)
        //     setDatePickerToogle(true);
        // }

    }

    const dateTest = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeadline(event.target.value);
    }

    const createTask = () => {
        console.log(deadline)
        if (!title.trim()) {
            alert("Enter title!")
            return;
        }
        if (!specCheck(deadline)) {
            alert("enter date must be bigger then current date")
            return;
        }
        // if (specCheck(deadline) === "today") {
        //     dispatch(createNewTask({id: uuidv4(), title: title.trim(), deadline: "today", highPriority}));
        //     setCreated(true);
        //     props.closeModal();
        // }
        else {
            console.log(deadline)
            dispatch(createNewTask({
                id: uuidv4(),
                title: title.trim(),
                deadline: typeOfCreatedDate(deadline),
                highPriority
            }));
            setCreated(true);
            props.closeModal();
        }
    }

    return (
        <div className={classes.taskModal}>
            <div className={classes.background}/>
            {loading ? <h1>Creating...</h1> :
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
                                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
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
            }
        </div>
    )
}

export default CreateTask;