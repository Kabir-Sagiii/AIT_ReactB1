const myReducer = (
  storedata = {
    name: "Kabir",
    products: [],
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
  }
  return storedata;
};

export default myReducer;
