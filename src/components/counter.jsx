import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="text-2xl">
      <h2>Count: {count}</h2>
      <button className="btn" onClick={handleIncrement}>Increase</button>
      <button className="btn" onClick={handleDecrement}>Decrease</button>
      <button className="btn" onClick={handleReset}>Reset</button>
    </div>
  );
}
