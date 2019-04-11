import * as types from "../types/itemsTypes";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { AppTypes } from "../reducers";
import { configToken } from "./authActions";
import { getErrors } from "./errorActions";
import { GetErrors } from "../types/errorTypes";

export const getItems = (): ThunkAction<
  void,
  AppTypes,
  null,
  types.GetItems | types.ItemsLoading | GetErrors
> => dispatch => {
  axios
    .get("/api/items")
    .then(res => {
      dispatch({ type: types.LOADING_ITEMS });
      dispatch({
        type: types.GET_ITEMS,
        items: res.data
      });
    })
    .catch(err => dispatch(getErrors(err.response.data.msg, err.status)));
};

// DISCLAIMER: the mongoose item schema is defined as { name: req.body.name }
// so it's required to have that format in the POST request. As a whole the function
// receives a string from an input and returns a response of Item type.

export const addItem = (
  item: string
): ThunkAction<void, AppTypes, null, types.AddItem | GetErrors> => (
  dispatch,
  getState
) => {
  axios
    .post("/api/items", { name: item }, configToken(getState))
    .then(res => {
      dispatch({
        type: types.ADD_ITEM,
        item: res.data
      });
    })
    .catch(err => dispatch(getErrors(err.response, err.status)));
};

export const deleteItem = (
  id?: string
): ThunkAction<void, AppTypes, null, types.DeleteItem | GetErrors> => (
  dispatch,
  getState
) => {
  axios
    .delete(`/api/items/${id}`, configToken(getState))
    .then(res => {
      dispatch({
        type: types.DELETE_ITEM,
        id
      });
    })
    .catch(err => dispatch(getErrors(err.response.data.msg, err.status)));
};

export const handleLoading = (): types.ItemsLoading => ({
  type: types.LOADING_ITEMS
});
