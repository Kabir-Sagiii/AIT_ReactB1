import Header from "./Components/Header"
import Main from "./Components/Main";
import "./App.css"
import Counter from "./Components/Counter/Counter";
import Nav from "./Components/Nav/Nav";
import User from "./Components/UserProfile/User";
import Input from "./Components/Parent-Child/Input";
import Text from "./Components/Child-Parent/Text";

function App() {
  return (
    <div className="App">
      <Nav />
      <Text />
      <Input />
     
      
    </div>
  );
}

export default App;
