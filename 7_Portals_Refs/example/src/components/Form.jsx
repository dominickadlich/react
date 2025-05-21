import Preferences from "./Preferences";
import { useRef } from "react";

import classes from './Form.module.css'

function Form() {
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
            <Preferences ref={preferencesRef} />
            <button>Submit</button>
        </form>
    );
}

export default Form;