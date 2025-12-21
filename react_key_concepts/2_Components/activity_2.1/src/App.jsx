import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SubmitButton from "./components/SubmitButton";
import "./App.css";
import stan from "./assets/stan.jpeg";

function Header() {
  return (
    <>
      <img src={stan} />
      <h1>Stanley Yelnats</h1>
      <h3>Web Developer, Guitarist, Entreprenuer</h3>
    </>
  );
}

function Notes() {
  return (
    <>
      <div className="notes-border">
        <p>Right now, I am 30 years old and live in New Hampshire</p>
        <p>
          My full name is Stanley Yelnats and I am a web developer as well as a
          top-rated, bestselling guitarist!
        </p>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Notes />
    </>
  );
}

export default App;
