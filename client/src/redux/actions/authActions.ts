import axios from "axios";
import * as types from "../types/authTypes";
import { ThunkAction } from "redux-thunk";
import { AppTypes } from "../reducers";
import { getErrors } from "../actions/errorActions";
import { GetErrors } from "../types/errorTypes";
import { User } from "../types/authTypes";

export const userLoaded = (user: User): types.UserLoaded => ({
  type: types.USER_LOADED,
  user
});

export const loadUser = (): ThunkAction<
  void,
  AppTypes,
  null,
  GetErrors | types.authActionTypes
> => (dispatch, getState) => {
  dispatch({ type: types.USER_LOADING });

  axios
    .get("/api/auth/user", configToken(getState))
    .then(res => {
      //dispatch({ type: types.USER_LOADED, user: res.data });
      dispatch(userLoaded(res.data));
    })
    .catch(err => {
      dispatch(getErrors(err.response.data.msg, err.response.status));

      dispatch({
        type: types.AUTH_ERROR
      });
    });
};

export const register = ({
  name,
  email,
  password
}: User): ThunkAction<
  void,
  AppTypes,
  null,
  types.authActionTypes | GetErrors
> => dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  axios
    .post("/api/users", body, config)
    .then(res => dispatch({ type: types.REGISTER_SUCCESS, data: res.data }))
    .catch(err => {
      dispatch({ type: types.REGISTER_FAIL });
      dispatch(getErrors(err.response.data.msg, err.status, "REGISTER_FAIL"));
    });
};

export const login = ({
  email,
  password
}: User): ThunkAction<
  void,
  AppTypes,
  null,
  types.authActionTypes | GetErrors
> => dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  axios
    .post("/api/auth", body, config)
    .then(res => dispatch({ type: types.LOGIN_SUCCESS, data: res.data }))
    .catch(err => {
      dispatch({ type: types.LOGIN_FAIL });
      dispatch(getErrors(err.response.data.msg, err.status, "LOGIN_FAIL"));
    });
};

export const logout = () => ({
  type: types.LOGOUT_SUCCESS
});

export const configToken = getState => {
  // Get token from local storage
  const token = getState().authReducer.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // If token exists add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
