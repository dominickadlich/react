import { useState } from "react";

function ConditionalEmail() {
  // Use a single state object for related form data
  const [formState, setFormState] = useState({
    inputValue: '',
    submittedEmail: '',
    isValid: true
  });
  
  // Handle input changes
  const handleInputChange = (event) => {
    setFormState(prev => ({
      ...prev,
      inputValue: event.target.value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate email (basic check for @)
    const isValid = formState.inputValue.includes('@');
    
    setFormState(prev => ({
      ...prev,
      submittedEmail: prev.inputValue,
      inputValue: '',
      isValid: isValid
    }));
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter Email: </label>
        <input
          id="email"
          type="email" // Using email type for basic browser validation
          onChange={handleInputChange}
          value={formState.inputValue}
        />
        <button type="submit">Submit</button>
      </form>
      
      {!formState.isValid && formState.submittedEmail && (
        <section role="alert">
          <p>Invalid email address entered!</p>
        </section>
      )}
    </>
  );
}

export default ConditionalEmail;