import * as types from "../types/errorTypes";

export const getErrors = (
  msg: string,
  status: number,
  id: string | null = null
): types.GetErrors => ({
  type: types.GET_ERRORS,
  error: {
    msg,
    status,
    id
  }
});

export const clearErrors = (): types.ClearErrors => ({
  type: types.CLEAR_ERRORS
});
