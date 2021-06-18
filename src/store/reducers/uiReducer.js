import { constants } from "../actions/uiActions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, { type, payload }) => {
  switch (type) {
    case constants.SHOW_SUCCESS_SNACKBAR:
      return {
        ...state,
        successSnackbarOpen: true,
        snackbarMessage: payload.message,
      };

    case constants.SHOW_ERROR_SNACKBAR:
      return {
        ...state,
        errorSnackbarOpen: true,
        snackbarMessage: payload.message,
      };

    case constants.CLEAR_SNACKBAR:
      console.log("here");
      return {
        ...state,
        successSnackbarOpen: false,
        errorSnackbarOpen: false,
      };

    default:
      return state;
  }
};
