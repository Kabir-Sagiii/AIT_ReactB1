import logo from "./logo.svg";
import "./App.css";
import UseReducerComp from "./Components/UseReducerComp";
import ClassComp from "./Components/ClassComp";
import ClassState from "./Components/ClassState";

function App() {
  return (
    <div className="App">
      <ClassState />
      <ClassState />
      <ClassComp />
      <UseReducerComp />
    </div>
  );
}

export default App;
