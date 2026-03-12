import "./App.css";

function App() {

  
  function clickHandle1() {
    alert("button click 1");
  }


  const buttonStyle = {
    marginBottom: "20px",
    display: "inline-block",
  };

  return (
    <>
      <h1>Get started</h1>

      <button style={buttonStyle} onClick={clickHandle1}>
        Click Me 1
      </button>

    </>
  );
}

export default App;
