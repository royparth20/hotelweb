import axios from "axios";
import {store} from "../store";
import storage from "../utils/localStorage";
import LOCAL_STORE_KEYS from "../utils/LOCAL_STORAGE_KEYS";

const api = axios.create({
  baseURL: "https://hoteladmin.lexicmediatesting.in:8000/api/v1",
});
// let authenticated = store.getItem(LOCAL_STORE_KEYS.authenticated)

let session = storage.isAvailable()
  ? storage.getItem(LOCAL_STORE_KEYS.token)
  : null;
api.interceptors.request.use(
  (req) => {
    const token = store.getState().auth.token || null;
    if (session !== null)
      req.headers["Authorization"] = `Bearer ${session.toString()}`;
    if (token !== null) req.headers["Authorization"] = `Bearer ${token}`;
    return req;
  },
  (err) => {
    Promise.reject(err);
  }
);
// console.log(api);

export default api;
