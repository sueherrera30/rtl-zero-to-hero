import {  render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import FeedbackForm from "../components/FeedbackForm";


describe("testing related to feedback form", () => {
    test("Onload condition of form", () => {
        render(<FeedbackForm />);
        const textBox = screen.getByRole("textbox");
        expect(textBox).toBeInTheDocument()

        const checkBox = screen.getByLabelText("I accept the terms and conditions", {exact: false})
        expect(checkBox).toBeInTheDocument()

        const btn = screen.getByRole("button", {name: "add feedback", exact: false})   
        expect(btn).toBeInTheDocument()
        expect(btn).toBeDisabled();
    })
    test.skip("button enabled only id input and checkbox has values", async () => {
        render(<FeedbackForm />);
        const textBox = screen.getByPlaceholderText("enter your feedback here", { exact: false }); 
        const checkBox = screen.getByLabelText("I accept the terms and conditions", {exact: false});
        const btn = screen.getByRole("button", {name: "add feedback", exact: false})
        
        await userEvent.type(textBox, "food was to spicy");

        await userEvent.click(checkBox)
        await waitFor(() => {
            expect(btn).toBeEnabled()
        }); 
        
        await userEvent.click(checkBox)
        await waitFor(() => {
            expect(btn).toBeDisabled()
        }); 
    })
});
