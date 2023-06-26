import classes from "./Header.module.css"
import React, {useState} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import CreateTask from "../Task/createTask/CreateTask.tsx";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    const [createModal, setCreateModal] = useState(false);
    return (
        <>
            {
                createModal ? <CreateTask closeModal={() => setCreateModal(false)}/> : <></>
            }
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="me-4">
                                <Link to={"/main"} className={classes.link}>Main</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/day"} className={classes.link}>Day</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/week"} className={classes.link}>Week</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/month"} className={classes.link}>Month</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={"/variable"} className={classes.link}>For period</Link>
                            </Nav.Link>
                        </Nav>
                        <Button variant="primary" onClick={() => setCreateModal(true)}>Add task</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;