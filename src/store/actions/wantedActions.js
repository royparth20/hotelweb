export const constants = {
  LOAD_WANTED: "[wanted] load wanted",
};

export const wantedActions = {
  loadWanted: (wanted) => ({
    type: constants.LOAD_WANTED,
    payload: { wanted },
  }),
};
