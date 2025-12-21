import { useState } from "react";
import classes from "./Form.module.css";

function Form({ children, mode }) {
  let cssClasses;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("");

  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState("");

  function handleChangeEmail(event) {
    setEnteredEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setEnteredPassword(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    const emailIsValid = enteredEmail.includes("@");
    const passwordIsValid = enteredPassword.trim().length >= 6;

    setEmailIsValid(emailIsValid);
    setPasswordIsValid(passwordIsValid);

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    // do something...
    console.log("Inputs are valid, form submitted!");
  }

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label
            htmlFor="email"
            className={!emailIsValid && classes.labelInvalid}
          >
            Your email
          </label>
          <input
            id="email"
            // type="email"
            onChange={handleChangeEmail}
            className={!emailIsValid && classes.inputInvalid}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className={!passwordIsValid && classes.labelInvalid}
          >
            Your password
          </label>
          <input
            id="password"
            type="password"
            onChange={handleChangePassword}
            className={!passwordIsValid && classes.inputInvalid}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
