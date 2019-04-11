// CONSTANTS.

export const GET_ITEMS = "GET_ITEMS";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const LOADING_ITEMS = "LOADING_ITEMS";

// ACTION TYPES.

export interface Item {
  name: string;
  _id?: string;
  date?: Date;
}

export interface Items {
  items: Item[];
  loading: boolean;
}

export interface GetItems {
  type: typeof GET_ITEMS;
  items: Item[];
}

export interface AddItem {
  type: typeof ADD_ITEM;
  item: Item;
}

export interface DeleteItem {
  type: typeof DELETE_ITEM;
  id?: string;
}

export interface ItemsLoading {
  type: typeof LOADING_ITEMS;
}

export type itemsActionTypes = GetItems | AddItem | DeleteItem | ItemsLoading;
