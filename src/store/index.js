import { compose, createStore, combineReducers } from "redux";
import reducers from "./reducers";

// dev tool
const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(combineReducers(reducers), composeEnhancers());

export default store;
