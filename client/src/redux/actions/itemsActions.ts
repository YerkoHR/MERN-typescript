import * as types from "../types/itemsTypes";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { AppTypes } from "../reducers";

export const getItems = (): ThunkAction<
  void,
  AppTypes,
  null,
  types.GetItems | types.ItemsLoading
> => dispatch => {
  axios.get("/api/items").then(res => {
    dispatch({ type: types.LOADING_ITEMS });
    dispatch({
      type: types.GET_ITEMS,
      items: res.data
    });
  });
};

export const addItem = (
  item: string
): ThunkAction<void, AppTypes, null, types.AddItem> => dispatch => {
  axios.post("/api/items", item).then(res => {
    dispatch({
      type: types.ADD_ITEM,
      item: res.data
    });
  });
};

export const deleteItem = (
  id?: string
): ThunkAction<void, AppTypes, null, types.DeleteItem> => dispatch => {
  axios.delete(`/api/items/${id}`).then(res => {
    dispatch({
      type: types.DELETE_ITEM,
      id: id
    });
  });
};

export const handleLoading = (): types.ItemsLoading => ({
  type: types.LOADING_ITEMS
});
