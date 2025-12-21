import { useState } from "react";
import "./App.css";

import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <h2>A demo app for practicing portals!</h2>
      </main>
    </>
  );
}

export default App;
