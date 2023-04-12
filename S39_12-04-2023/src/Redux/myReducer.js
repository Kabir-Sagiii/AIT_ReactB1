const myReducer = (
  storedata = {
    name: "Kabir",
    products: [],
    todo: [],
  },
  action
) => {
  if (action.type === "name") {
    return {
      ...storedata,
      name: action.username,
    };
  } else if (action.type === "products") {
    return {
      ...storedata,
      products: action.payload,
    };
  } else if (action.type === "todo") {
    return {
      ...storedata,
      todo: action.payload,
    };
  }
  return storedata;
};

export default myReducer;
