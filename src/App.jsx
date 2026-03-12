import "./App.css";

function App() {
  function clickHandle1() {
    alert("button click 1");
  }


const clickHandle3 = () => {
    alert("click button 3");
  };


const clickHandle5 = (num)=>{
  alert(num * 5)
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

      <button
        style={buttonStyle}
        onClick={function clickHandle2() {
          alert("click button 2");
        }}
      >
        Click Me 2
      </button>

      <button style={buttonStyle} onClick={() => clickHandle3()}>
        Click me 3
      </button>


      <button style={buttonStyle} onClick={() => {alert("click button 4")}}>
        Click me 4
      </button>


      <button style={buttonStyle} onClick={() => clickHandle5(8)}>
        Click me 5
      </button>



    </>
  );
}

export default App;
