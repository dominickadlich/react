import { useState } from "react";
import "./App.css";

import EmailForm from "./components/EmailForm";
import Counters from "./components/Counters";
import PreferencesUncontrolled from "./components/PreferencesUncontrolled";
import FormUncontrolled from "./components/FormUncontrolled";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <EmailForm />
      <Footer />
    </>
  );
}

export default App;
