import { createStore, applyMiddleware, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer, { AppTypes } from "./reducers";
import { ActionTypes } from "./types";

const initialState = {};

const store = createStore<AppTypes, ActionTypes, {}, {}>(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk as ThunkMiddleware<AppTypes, ActionTypes>),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
