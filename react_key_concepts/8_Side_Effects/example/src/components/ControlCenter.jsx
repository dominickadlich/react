function ControlCenter() {
  function handleStart() {
    // Do something...
  }

  console.log("Component is rendering!"); // This is a side effect!

  return (
    <div>
      <p>Press button to start the review process</p>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
