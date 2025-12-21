import { useState } from "react";
import PreferencesControlled from "./PreferencesControlled";
import classes from "./FormControlled.module.css";

function FormControlled() {
  const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
  const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);

  function handleUpdateProdInfo(selection) {
    // Using one shared update handler function is optional
    // You could also use two separate functions (passes to Preferences) as props
    if (selection === "pref-new") {
      setWantsNewProdInfo((prevPref) => !prevPref);
    } else if (selection === "pref-updates") {
      setWantsProdUpdateInfo((prevPref) => !prevPref);
    }
  }
}

function reset() {
  setWantsNewProdInfo(false);
  setWantsProdUpdateInfo(false);
}

function handleSubmit(event) {
  event.preventDefault();
  // State values can be used here
  reset();
}

return (
  <form className={classes.form} onSubmit={handleSubmit}>
    <div className={classes.formControl}>
      <label htmlFor="email">Your email</label>
      <input type="email" id="email" />
    </div>
    <PreferencesControlled
      newProdInfo={wantsNewProdInfo}
      prodUpdateInfo={wantsProdUpdateInfo}
      onUpdateInfo={handleUpdateProdInfo}
    />
  </form>
);
