export const constants = {
  SHOW_SUCCESS_SNACKBAR: "[ui] show success snackbar",
  SHOW_ERROR_SNACKBAR: "[ui] show error snackbar",
  CLEAR_SNACKBAR: "[ui] clear snackbar",
};

export const uiActions = {
  showSuccessSnackbar: (message) => ({
    type: constants.SHOW_SUCCESS_SNACKBAR,
    payload: { message },
  }),
  showErrorSnackbar: (message) => ({
    type: constants.SHOW_ERROR_SNACKBAR,
    payload: { message },
  }),
  clearSnackbar: { type: constants.CLEAR_SNACKBAR },
};
