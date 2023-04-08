import { productType } from "./ActionTypes";
export const productActionCreator = (data) => {
  return {
    type: productType,
    payload: data,
  };
};
