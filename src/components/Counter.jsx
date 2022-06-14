import React, { useState, useEffect } from "react";

function Counter(props) {
  // Setting up component state.
  const [count, setCount] = useState(0);

  // Modifying the state.
  const incrementCount = () => setCount((previousCount) => previousCount + 1);
  const decrementCount = () => setCount((previousCount) => previousCount - 1);
  const resetCount = () => setCount(0);

  // Triggered when the component was rendered.
  useEffect(() => {
    console.log("component rendered");
  });

  // Triggered when the component was mounted.
  useEffect(() => {
    console.log("component mounted");
  }, []);

  // Triggered when the count state updates.
  useEffect(() => {
    console.log("count state updated");
  }, [count]);

  return (
    <>
      <button className="btn btn-primary btn-lg pr-4" onClick={resetCount}>
        Reset
      </button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button className="btn btn-danger btn-lg" onClick={decrementCount}>
        -
      </button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <h2 className="h2 m-2">{count}</h2>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button className="btn btn-success btn-lg" onClick={incrementCount}>
        +
      </button>
    </>
  );
}

export default Counter;
