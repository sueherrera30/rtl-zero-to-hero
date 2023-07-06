import React, { useState } from 'react'

const FeedbackForm = ({ setFeedbackItem }) => {
  const [feedBackText, setFeedBackText] = useState('');
  const [tncBox, setTncBox] = useState(false);

  const submitFeedback = () => {
    console.log("feedback submitted!");
    setFeedbackItem((prev) => [...prev, {id: Date.now(), text: feedBackText}])
    setFeedBackText("")
    setTncBox(!tncBox)
  }

  const handleInput = (e) => {
   setFeedBackText(e.target.value)
  }
  
  return (
    <div>
        <h1>FeedbackForm</h1>
        <input
            type='text'
            placeholder='enter your feedback here'
            value={feedBackText}
            onChange={handleInput}
        />
        <input
            id='tncBox'
            type='checkbox'
            defaultChecked={tncBox}j
            onChange={() => setTncBox(!tncBox)}
        /><label htmlFor='tncBox'>I accept the terms and conditions</label>

        <button onClick={() => submitFeedback()} disabled={!tncBox || !feedBackText}>add feedback</button>
    </div>
  )
}

export default FeedbackForm;