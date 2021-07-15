import axios from "axios";
import { store } from "../store";
import storage from "../utils/localStorage";
import LOCAL_STORE_KEYS from "../utils/LOCAL_STORAGE_KEYS";
import authActions from "../store/actions/authActions";
// import { useDispatch } from "react-redux";
const { dispatch } = store; // direct access to redux store.

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
    // console.log(token, session);
    return req;
  },
  (err) => {
    Promise.reject(err);
  }
);
// console.log(api);
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log("axios.interceptors.response", response);
    return response;
  },
  function (error) {
    // console.log("axios.interceptors.response.error", error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (
      error.response &&
      error.response.status === 404 &&
      error.response.data.message ===
        "You are logged out because you logged in with some other device. Please login again."
    ) {
      if (storage.isAvailable()) {
        storage.removeItem(LOCAL_STORE_KEYS.authenticated);
        storage.removeItem(LOCAL_STORE_KEYS.token);
        storage.removeItem(LOCAL_STORE_KEYS.profilePic);
        storage.removeItem(LOCAL_STORE_KEYS.id);
        // store.removeItem("persist:root");
        dispatch({ type: authActions.actions.LOGOUT });
      }
    }
    return Promise.reject(error);
  }
);
export default api;
