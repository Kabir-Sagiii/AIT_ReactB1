import { todoActionCreator } from "./ActionCreator";
import axios from "axios";
function thunkActionCreator(methodType, id) {
  return function (dispatch, getState) {
    const getData = (dispatch) => {
      fetch("http://localhost:5001/users")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(todoActionCreator(data));
        });
    };
    const deleteUser = (dispatch, id) => {
      axios.delete(`http://localhost:5001/users/${id}`).then(() => {
        alert("Deleted the USer");
        axios.get("http://localhost:5001/users").then((res) => {
          dispatch(todoActionCreator(res.data));
        });
      });
    };

    if (methodType === "get") {
      getData(dispatch);
    } else if (methodType === "delete") {
      deleteUser(dispatch, id);
    }
  };
}

export default thunkActionCreator;
