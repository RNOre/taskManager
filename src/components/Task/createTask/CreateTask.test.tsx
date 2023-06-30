import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import ModalForTest from "./ModalForTest.tsx";

test("modal component", ()=>{
    render(<ModalForTest/>);

    const inputTitle = screen.getByText("Title");
    const title = screen.getByRole('textbox');
    const deadlineTitle = screen.getByText("Deadline");
    const deadlineList = screen.getByLabelText("Deadline");
    const calendar = screen.getByTestId("calendar");
    const priorityTitle = screen.getByText("High priority");
    const inputPriority = screen.getByRole("checkbox")
    const btn = screen.getByText('Create');

    expect(title).toBeInTheDocument();
    expect(priorityTitle).toBeInTheDocument();
    expect(inputTitle).toBeInTheDocument();
    expect(deadlineTitle).toBeInTheDocument();
    expect(deadlineList).toBeInTheDocument();
    expect(calendar).toBeInTheDocument();
    expect(inputPriority).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
})
test("disabled btn without title", ()=>{
    render(<ModalForTest/>);

    const inputTitle =  screen.getByRole('textbox');
    const createBtn = screen.getByText('Create');
    const errorMessage = screen.getByText("*Title must contain at least one character");

    fireEvent.change(inputTitle, {target:{value:'       '}})

    expect(errorMessage).toBeInTheDocument();
    expect(createBtn).toBeDisabled();
})

test("date error", ()=>{
    render(<ModalForTest/>);

    const inputTitle =  screen.getByRole('textbox');
    const createBtn = screen.getByText('Create');
    const deadlineList = screen.getByLabelText("Deadline");
    const calendar = screen.getByTestId("calendar");
    let mutedText = screen.getByText('*Available for specific date')

    fireEvent.change(inputTitle, {target:{value:'newTask'}})

    expect(mutedText).toBeInTheDocument();
    expect(createBtn).toBeEnabled();
    expect(calendar).toBeDisabled();

    fireEvent.change(deadlineList, {target:{value:"specific"}})
    mutedText = screen.getByText('*check date')

    expect(mutedText).toBeInTheDocument()
    expect(createBtn).toBeDisabled();
    expect(calendar).toBeEnabled();

    fireEvent.change(deadlineList, {target:{value:"month"}})
    mutedText = screen.getByText('*Available for specific date')

    expect(mutedText).toBeInTheDocument()
    expect(createBtn).toBeEnabled();
    expect(calendar).toBeDisabled();
})

test(("check prev date"), ()=>{
    render(<ModalForTest/>);

    const inputTitle =  screen.getByRole('textbox');
    const createBtn = screen.getByText('Create');
    const deadlineList = screen.getByLabelText("Deadline");
    const calendar = screen.getByTestId("calendar");

    fireEvent.change(inputTitle, {target:{value:'newTask'}});
    fireEvent.change(deadlineList, {target:{value:"specific"}});
    fireEvent.change(calendar, {target:{value:"2023-06-25"}});
    const mutedText = screen.getByText('*enter date must be bigger then current date');
    expect(mutedText).toBeInTheDocument();
    expect(createBtn).toBeDisabled();
})


//new testModal

