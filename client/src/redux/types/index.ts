import { GetItems, AddItem, DeleteItem, ItemsLoading } from "./itemsTypes";
import { getErrors, clearErrors } from "./errorTypes";
import { userLoading, userLoaded } from "./authTypes";

export type ItemsActionTypes =
  | GetItems
  | AddItem
  | DeleteItem
  | ItemsLoading
  | getErrors
  | clearErrors
  | userLoading
  | userLoaded;
