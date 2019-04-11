import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  itemsReducer,
  authReducer,
  errorReducer
});

export type AppTypes = ReturnType<typeof rootReducer>;

export default rootReducer;
