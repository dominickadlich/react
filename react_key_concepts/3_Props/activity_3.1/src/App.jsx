import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import GoalList from "./components/GoalList";

function App() {
  return (
    <>
      <Header />

      <div className="content-border">
        <GoalList />
      </div>
    </>
  );
}

export default App;
