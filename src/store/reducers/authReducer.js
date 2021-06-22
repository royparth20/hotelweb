import authActions from "../actions/authActions";

const initialState = {
  authenticated: false,
  token: "",
  profilePic: "",
  userType: "",
  id: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case authActions.actions.LOGIN:
      return authActions.methods.login(payload);
    case authActions.actions.LOGOUT:
      return authActions.methods.logout();

    default:
      return state;
  }
};
