import * as types from "../types/authTypes";

const initialState: types.Auth = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: null,
  user: null
};

const authReducer = (
  state = initialState,
  action: types.authActionTypes
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

    //case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      localStorage.setItem("token", action.data.token);

      return {
        ...state,
        token: action.data.token,
        user: action.data.user,
        isAuthenticated: true,
        isLoading: false
      };

    case types.AUTH_ERROR:
    //case types.LOGOUT_FAIL:
    case types.LOGOUT_SUCCESS:
    case types.REGISTER_FAIL:
      localStorage.removeItem("token");

      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        token: null
      };
    default:
      return state;
  }
};

export default authReducer;
