import { useState, useOptimistic } from "react";

import {
  SaveFeedbackMessage,
  getFeedbackMessages,
} from "./components/SaveFeedbackMessage";
import SubmitButton from "./components/SubmitButton";

import "./App.css";

function App() {
  const loadedFeedbackMessages = getFeedbackMessages(); // Initial fetch
  const [feedbackMessages, setFeedbackMessages] = useState(
    loadedFeedbackMessages,
  );

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    feedbackMessages,
    (currentState, optimisticValue) => {
      return [...currentState, { ...optimisticValue, id: "temp" }];
    },
  );

  async function storeFeedbackMessage(formData) {
    const feedbackMessage = {
      title: formData.get("title"),
      message: formData.get("message"),
    };
    addOptimisticMessage(feedbackMessage);
    const updatedFeedback = await SaveFeedbackMessage(feedbackMessage);
    setFeedbackMessages((prevMessages) => [...prevMessages, updatedFeedback]);
  }

  return (
    <>
      <div className="border">
        <h2>Feedback Form</h2>
        <form action={storeFeedbackMessage}>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="message">Your Feedback</label>
            <textarea type="text" id="message" name="message" />
          </p>
          <SubmitButton />
        </form>
        <div className="border">
          <h2>Your Submissions</h2>
          {optimisticMessages.length === 0 && <p>No Feedback Submitted</p>}
          {optimisticMessages.lenth > 0 && (
            <ul>
              {optimisticMessages.map((feedbackMessage) => (
                <li key={feedbackMessage.id}>
                  <h3>{feedbackMessage.title}</h3>
                  <h3>{feedbackMessage.message}</h3>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
