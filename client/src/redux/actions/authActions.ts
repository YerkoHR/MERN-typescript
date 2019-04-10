import * as types from "../types/authTypes";

export const userLoading = (): types.userLoading => ({
  type: types.USER_LOADING
});

export const userLoaded = (user: string): types.userLoaded => ({
  type: types.USER_LOADED,
  user: user
});
