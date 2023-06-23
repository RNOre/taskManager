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
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <Form className={classes.dropdown}>
                                    <Form.Group>
                                        <FormControl type="date"/>
                                        <Form.Text className="text-muted">
                                            *First date
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group>
                                        <FormControl type="date"/>
                                        <Form.Text className="text-muted">
                                            *Second date
                                        </Form.Text>
                                    </Form.Group>
                                </Form>
                                <Nav.Link>
                                    <Link to={"/variableDate"} className={classes.link}>
                                        <Button variant="primary">
                                            Find tasks
                                        </Button>
                                    </Link>
                                </Nav.Link>
                            </NavDropdown>
                        </Nav>
                        <Button variant="primary" onClick={() => setCreateModal(true)}>Add task</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;