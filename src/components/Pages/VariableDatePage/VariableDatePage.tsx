import classes from "./VariableDatePage.module.css";
import TaskItem from "../../Task/TaskItem.tsx";
import {typeOfDate} from "../../../Service/DataService.ts";
import React, {useEffect, useState} from "react";
import { Form, FormControl} from "react-bootstrap";

const VariableDatePage = () => {




    const [firstDate, setFirstDate] = useState<string>();
    const [secondDate, setSecondDate] = useState<string>();

    const [loading, setLoading] = useState(true);
    const state = typeOfDate("variable", firstDate, secondDate);
    // let state:any = [];
    useEffect(() => {
        setTimeout(() => setLoading(false), 200)
    }, state)

    useEffect(()=>{
            // typeOfDate("variable", firstDate, secondDate)
    }
       , state)

    return (
        <div className={`container ${classes.variablePage}`}>
            <h1 className={classes.title}>
                Tasks for period
            </h1>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <Form className={classes.dropdown}>
                        <Form.Group>
                            <FormControl type="date" value={firstDate}
                                         onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstDate(event.target.value)}/>
                            <Form.Text className="text-muted">
                                *First date
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <FormControl type="date" value={secondDate}
                                         onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSecondDate(event.target.value)}/>
                            <Form.Text className="text-muted">
                                *Second date
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    <div className={classes.titleWrapper}>
                    </div>
                    <div className={classes.taskGroupWrapper}>
                        <div className={classes.variableTasks}>
                            {state.sort((a, b) => Number(b.highPriority) - Number(a.highPriority)).map(task =>
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

export default VariableDatePage;