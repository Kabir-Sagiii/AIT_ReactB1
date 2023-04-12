import { productType } from "./ActionTypes";
export const productActionCreator = (data) => {
  return {
    type: productType,
    payload: data,
  };
};

export const todoActionCreator = (data) => {
  return {
    type: "todo",
    payload: data,
  };
};
