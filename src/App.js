import { useState } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackOverview from './components/FeedbackOverview';

function App() {
  const [ feedbackItem, setFeedbackItem] = useState(
    [
       { id: 111, text: "Food was too spicy"},
       { id: 222, text: "Staff should be more polite"},
    ]);

  return (
    <div className="App" data-testid="parent-container">
      <FeedbackForm setFeedbackItem={setFeedbackItem} />
      <FeedbackOverview feedbackList={feedbackItem}  />
    </div>
  );
}

export default App;
