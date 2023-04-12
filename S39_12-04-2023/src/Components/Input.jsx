import { useState } from "react";
import myStore from "../Redux/Store";
function Input(props) {
  const [data, setData] = useState("");

  const sendDataToStore = () => {
    myStore.dispatch({
      type: "name",
      username: data,
    });
  };
  return (
    <div>
      <h2>Input Component</h2>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button onClick={sendDataToStore}>Submit</button>
      <hr />
    </div>
  );
}

export default Input;
