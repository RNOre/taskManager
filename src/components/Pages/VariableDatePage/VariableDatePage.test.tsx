import {fireEvent, render, screen} from "@testing-library/react";
import VariablePageForTest from "./VariablePageForTest.tsx";

test("variable page", ()=>{
    render(<VariablePageForTest/>);

    const firstDateCalendar = screen.getByTestId("firstDateCalendar");
    const secondDateCalendar = screen.getByTestId("secondDateCalendar");

    fireEvent.change(firstDateCalendar, {target:{value:"2023-06-25"}});
    fireEvent.change(secondDateCalendar, {target:{value:"2023-06-30"}});

    let errorMessage = screen.queryByText("*Second date must be bigger than first date");

    expect(errorMessage).not.toBeInTheDocument();

    fireEvent.change(secondDateCalendar, {target:{value:"2023-05-30"}});
    errorMessage = screen.getByText("*Second date must be bigger than first date");

    expect(errorMessage).toBeInTheDocument();
})