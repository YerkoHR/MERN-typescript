import * as types from "../types/errorTypes";
import { ItemsActionTypes } from "../types";

const initialState: types.Errors = {
  msg: {},
  status: null,
  id: null
};

const errorReducer = (
  state = initialState,
  action: ItemsActionTypes
): types.Errors => {
  switch (action.type) {
    case types.GET_ERRORS:
      return {
        msg: action.error.msg,
        status: action.error.status,
        id: action.error.id
      };
    case types.CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null
      };
    default:
      return state;
  }
};

export default errorReducer;
