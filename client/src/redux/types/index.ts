import { itemsActionTypes } from "./itemsTypes";
import { errorActionTypes } from "./errorTypes";
import { authActionTypes } from "./authTypes";

export type ActionTypes = itemsActionTypes | errorActionTypes | authActionTypes;
