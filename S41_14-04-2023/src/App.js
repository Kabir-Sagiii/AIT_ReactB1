import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import UseReducerComp from "./Components/UseReducerComp";
import ClassComp from "./Components/ClassComp";
import ClassState from "./Components/ClassState";
import Counter from "./Components/Counter";
import Profile from "./Components/Profile";
import Users from "./Components/Users";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div className="App">
      <Users />
      {/* {showCounter ? <Counter /> : <Profile />}
      <div style={{ marginTop: "50px" }}>
        <button
          onClick={() => {
            setShowCounter(true);
          }}
        >
          Show Counter
        </button>
        <button
          onClick={() => {
            setShowCounter(false);
          }}
        >
          Show Profile
        </button>
      </div> */}
    </div>
  );
}

export default App;
