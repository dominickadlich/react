import { useState } from "react";

function NewsletterField() {
  const [email, setEmail] = useState("");
  function handelUpdateEmail(event) {
    setEmail(event.target.value);
  }
  function handleClearInput() {
    setEmail("");
  }
  return (
    <>
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={handelUpdateEmail}
      />
      <button onClick={handleClearInput}>Reset</button>
    </>
  );
}

export default NewsletterField;
