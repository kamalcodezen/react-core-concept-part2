import { use, useState } from "react";

export default function Counter() {
  // useState
  const [count, setCount] = useState(0);

  //   click event
  const clickCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  //   style
  const counterStyle = {
    marginBottom: "10px",
    border: "2px solid yellow",
    padding: "40px",
    fontSize: "20px",
  };

  //   component
  return (
    <div style={counterStyle}>
      <p>Total Count {count}</p>
      <button style={{ fontSize: "20px" }} onClick={clickCount}>
        Click me
      </button>
    </div>
  );
}
