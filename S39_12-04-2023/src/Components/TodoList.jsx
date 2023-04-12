import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import thunkActionCreator from "../Redux/ThunkActionCreator";

function TodoList(props) {
  const dispatch = useDispatch();
  const todoData = useSelector((storedata) => {
    return storedata.todo;
  });
  useEffect(() => {
    dispatch(thunkActionCreator("get", null));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {todoData.length > 0 ? (
        <div>
          {todoData.map((todo) => {
            return (
              <div style={{ marginTop: "30px", textAlign: "center" }}>
                <span>{todo.name}</span> &nbsp;&nbsp;{" "}
                <button
                  onClick={() => {
                    dispatch(thunkActionCreator("delete", todo.id));
                  }}
                >
                  Delete
                </button>
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
