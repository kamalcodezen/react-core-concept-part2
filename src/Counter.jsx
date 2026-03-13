import { use, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementHandle = () => {
    const updateCount = count + 1;
    setCount(updateCount);
  };

  const decrementHandle = ()=>{
   const  updateDecrement = count - 1;
    setCount(updateDecrement);
  }

const resetHandle = ()=>{
setCount(0);

}


  return (
    <div className="users">
      <p style={{ marginBlock: "30px" }}>Count : {count < 0 ? <p>worng number</p> : count}</p>
      <button onClick={incrementHandle} className="counterBtn">Increment</button>
      <button onClick={decrementHandle} className="counterBtn">Decrement</button>
      <button onClick={resetHandle} className="counterBtn">Reset</button>
    </div>
  );
}

// export default function Counter() {
//   // useState
//   const [count, setCount] = useState(0);

//   //   click event
//   const clickCount = () => {
//     const newCount = count + 1;
//     setCount(newCount);
//   };

//   //   style
//   const counterStyle = {
//     marginBottom: "10px",
//     marginTop: "20px",
//     border: "2px solid yellow",
//     padding: "20px",
//     fontSize: "20px",
//   };

//   //   component
//   return (
//     <div style={counterStyle}>
//       <p>Total Count {count}</p>
//       <button style={{ fontSize: "20px" }} onClick={clickCount}>
//         Click me
//       </button>
//     </div>
//   );
// }
