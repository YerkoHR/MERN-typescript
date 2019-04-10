import * as types from "../types/authTypes";
import { ItemsActionTypes } from "../types";

const initialState: types.Auth = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: null,
  user: null
};

const authReducer = (
  state = initialState,
  action: ItemsActionTypes
): types.Auth => {
  switch (action.type) {
    case types.USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.user
      };
    default:
      return state;
  }
};

export default authReducer;
