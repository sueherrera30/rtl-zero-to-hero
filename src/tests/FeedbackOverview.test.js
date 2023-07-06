import { render, screen } from '@testing-library/react';
import FeedbackOverview from "../components/FeedbackOverview";

const feedback = [{ id: 111, text: "Food was too spicy"}, { id: 222, text: "Staff should be more polite"}]
test("No feedback found", () => {
    render(<FeedbackOverview feedbackList={[]} />);
    const feedbackNotFoundH3 = screen.getByText("Feedback not found", { exact: false});
    expect(feedbackNotFoundH3).toBeInTheDocument();
})

test("Feedback found scenario", () => {
    render(<FeedbackOverview feedbackList={feedback} />);
        
    const liOne = screen.getByText("food was too spicy", { exact: false})
    expect(liOne).toBeInTheDocument();

    const liTwo = screen.getByText("Staff should be more polite", { exact: false})
    expect(liTwo).toBeInTheDocument();

    const elementLi = screen.getAllByRole("listitem");
    expect(elementLi.length).toBe(feedback.length)
    
    // this is used to compare PRIMITIVE types, BOOLEANS, NUMBERS ETC.
    //use TOEQUAL  to compare OBJECTS OR ARRAYS
});