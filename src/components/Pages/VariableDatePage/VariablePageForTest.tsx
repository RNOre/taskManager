import classes from "./VariableDatePage.module.css";
import {checkVariable} from "../../../Service/DataService.ts";
import React, { useState} from "react";
import { Form, FormControl} from "react-bootstrap";

const VariableDatePage = () => {

    const [firstDate, setFirstDate] = useState<string>();
    const [secondDate, setSecondDate] = useState<string>();

    return (
        <div className={`container ${classes.variablePage}`}>
            <h1 className={classes.title}>
                Tasks for period
            </h1>
                <div>
                    <Form className={classes.dropdown}>
                        <Form.Group>
                            <FormControl type="date" value={firstDate} data-testid={"firstDateCalendar"}
                                         onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstDate(event.target.value)}/>
                            <Form.Text className="text-muted">
                                *First date
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <FormControl type="date" value={secondDate} data-testid={"secondDateCalendar"}
                                         onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSecondDate(event.target.value)}/>
                            <Form.Text className="text-muted">
                                *Second date
                            </Form.Text>
                        </Form.Group>

                    </Form>
                    {checkVariable(firstDate,secondDate)?
                        <Form.Text className="text-muted">
                            *Second date must be bigger than first date
                        </Form.Text>:
                        <div className={classes.taskGroupWrapper}>
                            <div className={classes.variableTasks}>

                            </div>
                        </div>
                    }
                </div>
        </div>
    )
}

export default VariableDatePage;