import * as types from "../types/errorTypes";

const initialState: types.Errors = {
  msg: null,
  status: null,
  id: null
};

const errorReducer = (
  state = initialState,
  action: types.errorActionTypes
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
        msg: null,
        status: null,
        id: null
      };
    default:
      return state;
  }
};

export default errorReducer;
