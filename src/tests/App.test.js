import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import App from "../App";

const feedback = [{ id: 111, text: "Food was too spicy"}, { id: 222, text: "Staff should be more polite"}, {id: 333, text: "new item"}]
test("Feedback should be display after submit", async () =>  {
    render(<App />);
    const textBox = screen.getByPlaceholderText("enter your feedback here", { exact: false }); 
    const checkBox = screen.getByLabelText("I accept the terms and conditions", {exact: false});
    const btn = screen.getByRole("button", {name: "add feedback", exact: false});

    await userEvent.type.apply(textBox, "new feedback");
    await userEvent.click(checkBox);
    await userEvent.click(btn);

    const newFeedback = screen.queryByText("new feedback", { exact: false })
    await waitFor(() => {
        expect(newFeedback).toBeInTheDocument();
    })
})

test("2 Feedback should be display after submit", async () =>  {
    render(<App />);
    const textBox = screen.getByRole("textbox"); 
    const checkBox = screen.getByLabelText("I accept the terms and conditions", {exact: false});
    const btn = screen.getByRole("button", {name: "add feedback", exact: false});

    await userEvent.type(textBox, "new feedback");
    await userEvent.click(checkBox);
    await userEvent.click(btn);

    await userEvent.type(textBox, "new feedback");
    await userEvent.click(btn);

    const allList = screen.queryByRole("listitem")
    await waitFor(() => {
        expect(allList.length).toBe(feedback.length);
    })
})
