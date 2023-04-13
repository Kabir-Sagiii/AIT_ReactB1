import { useReducer } from "react";

const myReducer = (state, action) => {
  if (action.type === "increase") {
    return {
      ...state,
      count: state.count + 5,
    };
  } else if (action.type === "decrease") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else if (action.type === "reset") {
    return {
      ...state,
      count: 0,
    };
  }
  return state;
};

function UseReducerComp(props) {
  const [state, dispatch] = useReducer(myReducer, {
    count: 0,
    products: [],
    user: [],
    results: [],
  });

  const increaseCount = () => {
    dispatch({
      type: "increase",
    });
  };

  const decreaseCount = () => {
    dispatch({
      type: "decrease",
    });
  };

  const resetCount = () => {
    dispatch({
      type: "reset",
    });
  };
  return (
    <div>
      <h2 style={{ color: "green" }}>use Reducer hook</h2>
      <h3>
        Count Value is : <span style={{ color: "red" }}>{state.count}</span>
      </h3>
      <button onClick={increaseCount}>Increase Count by 5</button>&nbsp;&nbsp;
      <button onClick={decreaseCount}>Decrease Count by 1</button>&nbsp;&nbsp;
      <button onClick={resetCount}>Reset to Zero</button>
    </div>
  );
}

export default UseReducerComp;
