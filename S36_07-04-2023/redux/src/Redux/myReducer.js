const myReducer = (storedata = "Kabir", action) => {
  if (action.type === "name") {
    return action.username;
  }
  return storedata;
};

export default myReducer;
