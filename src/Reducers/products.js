import {
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_FAIL
  } from "../Action/types";

  const initialState = [];

  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_PRODUCTS_SUCCESS:
        return {
          ...state,
          items: payload.items,
        };
      case GET_PRODUCTS_FAIL:
        return {
          ...state,
          items: [],
        };
      default:
        return state;
    }
  }