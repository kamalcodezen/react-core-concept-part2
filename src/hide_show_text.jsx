import { use, useState } from "react";

export default function ShowHideText() {
  const [show, setShow] = useState(false);

  const toggleHandle = () => {
    setShow(show === false);
  };

  return (
    <div className="users">
      <h1>Show And Hide Text </h1>
      {show && <p className="counterBtn">Hello, React Leaner</p>}

      <button onClick={toggleHandle} className="counterBtn">
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
