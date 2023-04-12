import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { todoActionCreator } from "../Redux/ActionCreator";

function Todonput(props) {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const sendDataToServer = () => {
    var data = {
      name: state,
    };
    axios.post("http://localhost:5001/users", data).then((res) => {
      console.log(res);
      axios.get("http://localhost:5001/users").then((res) => {
        console.log(res);
        dispatch(todoActionCreator(res.data));
      });
    });
  };
  return (
    <div>
      <h2>Todo Input </h2>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={sendDataToServer}>Submit</button>
    </div>
  );
}

export default Todonput;
