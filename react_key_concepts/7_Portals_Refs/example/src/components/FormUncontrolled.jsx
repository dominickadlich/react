import PreferencesUncontrolled from "./PreferencesUncontrolled";
import { useRef } from "react";

import classes from "./FormUncontrolled.module.css";

function FormUncontrolled() {
  const preferencesRef = useRef({});

  function handleSubmit(event) {
    event.preventDefault();

    console.log(preferencesRef.current.selectedPreferences); // reading a value
    preferencesRef.current.reset(); // executing a function stored in Preferences
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.formControl}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" />
      </div>
      <PreferencesUncontrolled ref={preferencesRef} />
      <button>Submit</button>
    </form>
  );
}

export default FormUncontrolled;
