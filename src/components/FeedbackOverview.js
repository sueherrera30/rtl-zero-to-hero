import React from 'react'

const FeedbackOverview = ({ feedbackList }) => {
  console.log(feedbackList);
  if(feedbackList.length === 0) return <h3>Feedback not found</h3>
  return (
    <div>
      <h2>Feedback overview</h2>
      <lu>
        {
          feedbackList.map(item => (
            <li key={item.id}>{item.text}</li>
          ))
        }
      </lu>
    </div>
  )
}

export default FeedbackOverview;