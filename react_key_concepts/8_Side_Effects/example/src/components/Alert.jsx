import { useState, useEffect } from "react";

function Alert() {
  const [alertDone, setAlertDone] = useState(false);

  useEffect(() => {
    let timer;

    console.log("Starting Alert Timer!");
    timer = setTimeout(() => {
      console.log("Timer Expired!");
      setAlertDone(true);
    }, 2000);

    return function () {
      console.log("Cleanup!");
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!alertDone && <p>Relax, you still have time!</p>}
      {alertDone && <p>Time to get up!</p>}
    </>
  );
}

export default Alert;

// App.jsx

// import { useState } from 'react'
// import './App.css'

// import BlogPosts from './components/BlogPosts'
// import Alert from './components/Alert'

// function App() {
//   const [showAlert, setShowAlert] = useState(false);

//   function handleShowAlert() {
// State updating is done by passing a function to setShowAlert
// because the new state depends on the previous state (it's the opposite)
//     setShowAlert((isShowing) => !isShowing)
//   }

//   return (
//     <>
//       <button onClick={handleShowAlert}>
//         {showAlert ? 'Hide' : 'Show'} Alert
//       </button>
//       {showAlert && <Alert />}
//     </>
//   )
// }

// export default App
