import "./App.css";
import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Api from "./Components/API/Api";
import Image from "./Components/Lifecyle/Image";
import Text from "./Components/Lifecyle/Text";
import Users from "./Components/Lifecyle/Users";
import Timer from "./Components/Timer/Timer";
import Form from "./Components/Forms/Form";
import A from "./Components/Context-API/A";

function App() {
  const [showImage, setShowImage] = useState(true);
  return (
    <div className="App">
      <Nav />
      <A />
      {/* <Form /> */}
    </div>
  );
}

export default App;
