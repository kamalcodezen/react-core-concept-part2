import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
import Counter from "./Counter";
import Players from "./Sports";
import Sports from "./Sports";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./posts";
import ShowHideText from "./hide_show_text";

const fetchUsersApi = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
};

const countriesFetch = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
};

// const friendsApi = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = res.json();
//   return data;
// };

// const fetchPosts = async () => {
//   const res = fetch("https://jsonplaceholder.typicode.com/posts");
//   return (await res).json();
// };

function App() {
  const fetchUsers = fetchUsersApi();

  const countriesPromise = countriesFetch();

  // const friends = friendsApi();
  // const postsApi = fetchPosts();

  function clickHandle1() {
    alert("button click 1");
  }

  const clickHandle3 = () => {
    alert("click button 3");
  };

  const clickHandle5 = (num) => {
    alert(num * 5);
  };

  const buttonStyle = {
    marginBottom: "20px",
    display: "inline-block",
  };

  return (
    <>
      <h1>Get started React</h1>

      <Suspense fallback={<p>Countries Data is Loading.....</p>}>
        <Countries countriesFetch={countriesPromise}></Countries>
      </Suspense>

      <Suspense fallback={<h3>User Data Loading</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <ShowHideText></ShowHideText>

      <Counter></Counter>

      {/* <Suspense fallback={<h3>Post is loading</h3>}>
        <Posts fetchPost={postsApi}></Posts>
      </Suspense> */}

      {/* 
      <Suspense fallback={<h3>Async Await Loading.....</h3>}>
        <Friends friendsApi={friends}></Friends>
      </Suspense>

      <Suspense fallback={<h3 className="users">Lo Lo Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Players></Players>

      {/* <Counter></Counter> */}

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

      <button
        style={buttonStyle}
        onClick={() => {
          alert("click button 4");
        }}
      >
        Click me 4
      </button>

      <button style={buttonStyle} onClick={() => clickHandle5(8)}>
        Click me 5
      </button>
    </>
  );
}

export default App;
