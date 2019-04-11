export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

// Store state

export interface Auth {
  token: string | null;
  isAuthenticated: boolean | null;
  isLoading: boolean | null;
  user: User | null;
}

// User types

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserLoading {
  type: typeof USER_LOADING;
}

export interface UserLoaded {
  type: typeof USER_LOADED;
  user: User;
}

// Authentication

export interface AuthError {
  type: typeof AUTH_ERROR;
}

// Registration

export interface RegisterFail {
  type: typeof REGISTER_FAIL;
}

export interface RegisterSuccess {
  type: typeof REGISTER_SUCCESS;
  data: {
    token: string;
    user: User;
  };
}

// Login

export interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
}
export interface LoginFail {
  type: typeof LOGOUT_FAIL;
}

export type authActionTypes =
  | UserLoading
  | UserLoaded
  | AuthError
  | RegisterSuccess
  | RegisterFail
  | LogoutSuccess
  | LoginFail;
