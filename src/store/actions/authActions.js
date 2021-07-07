import store from "../../utils/localStorage";
import LOCAL_STORE_KEYS from "../../utils/LOCAL_STORAGE_KEYS";

const actions = {
  LOGIN: "LOGIN_USER",
  LOGOUT: "LOGOUT_USER",
  LOADEXIST: "LOADEXIST",
};

const methods = {
  loadFromStore: () => {
    if (store.isAvailable()) {
      return {
        authenticated: store.getItem(LOCAL_STORE_KEYS.authenticated),
        token: store.getItem(LOCAL_STORE_KEYS.token),
        id: store.getItem(LOCAL_STORE_KEYS.id),
      };
    } else {
      return {
        authenticated: false,
        token: "",
        profilePic: "",
        userType: "",
      };
    }
  },
  login: (payload) => {
    if (store.isAvailable()) {
      store.setItem(LOCAL_STORE_KEYS.authenticated, true);
      store.setItem(LOCAL_STORE_KEYS.token, payload.token);
      store.setItem(LOCAL_STORE_KEYS.id, payload.id);
    }

    // console.log("LOGIN ACTION ==> ", payload);
    return {
      authenticated: true,
      token: payload.token,
      id: payload.id,
      userType: payload.userType,
    };
  },

  logout: () => {
    if (store.isAvailable()) {
      store.removeItem(LOCAL_STORE_KEYS.authenticated);
      store.removeItem(LOCAL_STORE_KEYS.userType);
      store.removeItem(LOCAL_STORE_KEYS.token);
      store.removeItem(LOCAL_STORE_KEYS.profilePic);
    }

    return {
      authenticated: false,
      token: "",
      profilePic: "",
      userType: "",
    };
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { actions, methods };
