import classes from "./CreateTask.module.css";
import React, { useEffect, useState} from "react";
import {Button, Form, FormControl} from "react-bootstrap";
import {specCheck} from "../../../Service/DataService.ts";

const CreateTask = (props: any) => {

      const [, setCreated] = useState(false);
    const [titleError, setTittleError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [dateErrorMessage, setDateErrorMessage] = useState("");


    const [title, setTitle] = useState("");
    const [deadline, setDeadline] = useState("day");
    const [highPriority, setHighPriority] = useState(false)
    const [datePickerToogle, setDatePickerToogle] = useState(true);

    // const dateType = "day"||"week"||"month"

    useEffect(()=>{
        title.trim()===""?setTittleError(true):setTittleError(false);
    }, [title]);

    useEffect(()=>{
        if(deadline==="day"||deadline==="week"||deadline==="month"){
            setDateError(false);
        }else{
            if(deadline==="specific"){
                setDateError(true);
                setDateErrorMessage("*check date")
            }else{
                if (!specCheck(deadline)) {
                    setDateError(true);
                    setDateErrorMessage("*enter date must be bigger then current date")
                }else{
                    setDateErrorMessage("");
                    setDateError(false);
                }
            }
        }
    }, [deadline]);
    const changeDeadline = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.target.value === "specific" ? setDatePickerToogle(false) : setDatePickerToogle(true);
        setDeadline(event.target.value);
    }

    const dateTest = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeadline(event.target.value);
    }

    const createTask = () => {
        setCreated(true);
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
                                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setTitle(event.target.value)
                                      }}/>
                        {
                            titleError?
                                <Form.Text className = "text-muted">
                                    *Title must contain at least one character
                                </Form.Text>:<></>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor={"deadline"}>Deadline</Form.Label>
                        <Form.Select onChange={changeDeadline} name={"deadline"} id={"deadline"}>
                            <option value="day">for a day</option>
                            <option value="week">for a week</option>
                            <option value="month">for a month</option>
                            <option value="specific">specific date</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <FormControl disabled={datePickerToogle} type="date" value={deadline}
                                     data-testid={"calendar"}  onChange={dateTest}/>
                        {(deadline==="day"||deadline==="week"||deadline==="month")?
                            <Form.Text className="text-muted">
                                *Available for specific date
                            </Form.Text>:
                            <Form.Text className="text-muted">
                                {dateErrorMessage}
                            </Form.Text>

                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="High priority" checked={highPriority}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setHighPriority(event.target.checked)
                                    }}/>
                    </Form.Group>
                    <Button variant="primary" onClick={createTask} disabled={titleError||dateError}>
                        Create
                    </Button>
                </Form>
        </div>
    )
}

export default CreateTask;