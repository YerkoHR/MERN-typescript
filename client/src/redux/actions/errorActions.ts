import * as types from "../types/errorTypes";

export const getErrors = (
  msg: object,
  status: number,
  id: null = null
): types.getErrors => ({
  type: types.GET_ERRORS,
  error: {
    msg,
    status,
    id
  }
});

export const clearErrors = (): types.clearErrors => ({
  type: types.CLEAR_ERRORS
});
