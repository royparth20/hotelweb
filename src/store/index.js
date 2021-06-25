import { compose, createStore, combineReducers } from "redux";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // which reducer want to store
};

// dev tool
const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// const store = createStore(combineReducers(reducers), composeEnhancers());

const pReducer = persistReducer(persistConfig, combineReducers(reducers));
const store = createStore(pReducer, composeEnhancers());
const persistor = persistStore(store);
// export default store;
export { persistor, store };
