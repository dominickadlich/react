import { useActionState, useOptimistic, useState } from "react";

import SubmitButton from "./components/SubmitButton";

async function submitFeedback(title, text) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate a slow network or server
  console.log(`Feedback: ${title} - ${text}`);
  return { title, text, id: new Date().getTime() };
}

function App() {
  const [feedbackSubmissions, setFeedbackSubmissions] = useState([]);

  const [optimisticFeedback, addOptimisticFeedback] = useOptimistic(
    feedbackSubmissions,
    (currentState, optimisticValue) => [
      ...currentState,
      { ...optimisticValue, id: "temp" },
    ],
  );

  async function storeFeedback(prevState, formData) {
    const feedbackMessage = {
      title: formData.get("title"),
      text: formData.get("feedback"),
    };

    if (!feedbackMessage.title?.trim() && !feedbackMessage.text?.trim()) {
      return {
        errors: {
          title: "Title cannot be empty!",
          feedback: "Feedback cannot be empty!",
        },
      };
    }
    if (!feedbackMessage.title?.trim()) {
      return {
        errors: {
          title: "Title cannot be empty!",
        },
      };
    }
    if (!feedbackMessage.text?.trim()) {
      return {
        errors: {
          feedback: "Feedback cannot be empty!",
        },
      };
    }

    // console.log('Form Data:', feedbackMessage);
    // console.log('Form Title:', feedbackMessage.title);
    // console.log('Form Message:', feedbackMessage.text);

    addOptimisticFeedback(feedbackMessage);
    const updatedFeedback = await submitFeedback(
      feedbackMessage.title,
      feedbackMessage.text,
    );

    // console.log('Server Response', updatedFeedback);

    setFeedbackSubmissions((prevFeedback) => [
      ...prevFeedback,
      updatedFeedback,
    ]);

    return {
      error: null,
    };
  }

  const [formState, formAction] = useActionState(storeFeedback, {
    error: null,
  });

  return (
    <>
      <header>
        <h1>Feedback Form</h1>
      </header>
      <form action={formAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          {formState.errors?.title && (
            <span className="error">{formState.errors.title}</span>
          )}
        </p>
        <p>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" name="feedback" rows={3} />
          {formState.errors?.feedback && (
            <span className="error">{formState.errors.feedback}</span>
          )}
        </p>
        <p className="actions">
          <SubmitButton />
        </p>
      </form>
      <div id="user-feedback">
        <h2>Your Submissions</h2>
        {optimisticFeedback.length === 0 && <p>No feedback submitted yet.</p>}
        {optimisticFeedback.length > 0 && (
          <ul>
            {optimisticFeedback.map((submission) => (
              <li key={submission.id}>
                <h3>{submission.title}</h3>
                <p>{submission.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
