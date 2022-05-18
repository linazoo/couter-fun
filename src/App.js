import "./styles.scss";
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div className="button-wrapper">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}
