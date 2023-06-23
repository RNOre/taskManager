import {fireEvent, render, screen} from "@testing-library/react";
import CreateTaskForTest from "./CreateTaskForTest.tsx";
import '@testing-library/jest-dom'
test("create task with empty title", ()=>{
    render(<CreateTaskForTest/>);
    const btn = screen.getByText('Create');
    fireEvent.click(btn);

    const message = screen.getByText('Enter title!');
    expect(message).toBeInTheDocument();
})

test("create task with title", ()=>{
    render(<CreateTaskForTest/>);

    const inputTitle = screen.getByTitle("Title")
    // const test = screen.getByLabelText("Title")
    fireEvent.change(inputTitle, {target:{value:'newTask'}});

    const btn = screen.getByText('Create');
    fireEvent.click(btn);

    // userEvent.click(btn);
    const message = screen.getByText('Created');
    // expect(btn).toBeInTheDocument();
    expect(message).toBeInTheDocument();
})