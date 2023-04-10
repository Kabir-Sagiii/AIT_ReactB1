import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActionCreator } from "../Redux/ActionCreator";

function TodoList(props) {
  const dispatch = useDispatch();
  const todoData = useSelector((storedata) => {
    return storedata.todo;
  });
  useEffect(() => {
    fetch("http://localhost:5001/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(todoActionCreator(data));
      });
  });
  return (
    <div>
      <h2>Todo List</h2>
      {todoData.length > 0 ? (
        <div>
          {todoData.map((todo) => {
            return (
              <div style={{ marginTop: "30px", textAlign: "center" }}>
                {" "}
                <span>{todo.name}</span> &nbsp;&nbsp; <button>Delete</button>{" "}
              </div>
            );
          })}
        </div>
      ) : (
        <h2 style={{ color: "red" }}>No Data</h2>
      )}
    </div>
  );
}

export default TodoList;
