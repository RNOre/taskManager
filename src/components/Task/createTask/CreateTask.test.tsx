import {fireEvent, render, screen} from "@testing-library/react";
import CreateTaskForTest from "./CreateTaskForTest.tsx";
import '@testing-library/jest-dom'

test("modal component", ()=>{
    render(<CreateTaskForTest/>);

    const inputTitle = screen.getByText("Title");
    const title = screen.getByRole('textbox');
    const deadline = screen.getByText("Deadline");
    const priorityTitle = screen.getByText("High priority");
    const inputPriority = screen.getByRole("checkbox")
    const btn = screen.getByText('Create');

    expect(title).toBeInTheDocument();
    expect(priorityTitle).toBeInTheDocument();
    expect(inputTitle).toBeInTheDocument();
    expect(deadline).toBeInTheDocument();
    expect(inputPriority).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
})
test("create task with empty title", ()=>{
    render(<CreateTaskForTest/>);
    const btn = screen.getByText('Create');
    fireEvent.click(btn);

    const message = screen.getByText('Enter title!');
    expect(message).toBeInTheDocument();
})

test("create task with title", ()=>{
    render(<CreateTaskForTest/>);

    const inputTitle =  screen.getByRole('textbox');
    fireEvent.change(inputTitle, {target:{value:'newTask'}});
    const btn = screen.getByText('Create');
    fireEvent.click(btn);

    const message = screen.getByText('Created');
    expect(message).toBeInTheDocument();
})
