import { createStore, applyMiddleware, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer, { AppTypes } from "./reducers";
import { ItemsActionTypes } from "./types";
const initialState = {};

//const middleWare = [thunk];

const store = createStore<AppTypes, ItemsActionTypes, {}, {}>(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk as ThunkMiddleware<AppTypes, ItemsActionTypes>),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
