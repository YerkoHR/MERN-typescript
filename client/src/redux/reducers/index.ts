import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
  itemsReducer
});

export type AppTypes = ReturnType<typeof rootReducer>;

export default rootReducer;
