import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, SET_MESSAGE } from "./types";
  import ProductService from "../services/product.service";

  //change the state once the server responsded with the accesstoken
  export const getAllProduct = () => (dispatch) => {
    return ProductService.getAllProduct().then(
      (data) => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: { items : data },
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: GET_PRODUCTS_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };