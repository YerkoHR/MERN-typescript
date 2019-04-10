import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  itemsReducer,
  authReducer
});

export type AppTypes = ReturnType<typeof rootReducer>;

export default rootReducer;
