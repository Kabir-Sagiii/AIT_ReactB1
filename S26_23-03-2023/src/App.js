import "./App.css";
import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Api from "./Components/API/Api";
import Image from "./Components/Lifecyle/Image";
import Text from "./Components/Lifecyle/Text";

function App() {
  const [showImage, setShowImage] = useState(true);
  return (
    <div className="App">
      <Nav />
      {showImage ? <Image /> : <Text />}
      <br />
      <br />
      <button
        onClick={() => {
          setShowImage(true);
        }}
      >
        Show Image Comp
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          setShowImage(false);
        }}
      >
        Show Text Comp
      </button>
    </div>
  );
}

export default App;
