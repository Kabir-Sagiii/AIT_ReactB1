import Header from "./Components/Header"
import Main from "./Components/Main";
import "./App.css"
import Counter from "./Components/Counter/Counter";
import Nav from "./Components/Nav/Nav";
import User from "./Components/UserProfile/User";

function App() {
  return (
    <div className="App">
      <Nav />
      <User />
       <Counter />
      
    </div>
  );
}

export default App;
