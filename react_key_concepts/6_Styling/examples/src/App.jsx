import { useState } from "react";
import "./App.css";

import ColoredText from "./components/ColoredText";
import TodoPriority from "./components/TodoPriority";
import TextBox from "./components/TextBox";
import StyledButton from "./components/StyledButton";
import Tailwind from "./components/Tailwind";

function App() {
  function handleClick() {
    console.log("This button was clicked!");
  }

  return (
    <>
      <Tailwind />
      <StyledButton onClick={handleClick}>Click Me!</StyledButton>
      <TextBox mode="info">
        Visit react.dev for a complete API reference.
      </TextBox>
      <TextBox mode="alert">
        Unfortunately, loading the course list failed.
      </TextBox>
    </>
  );
}

export default App;
