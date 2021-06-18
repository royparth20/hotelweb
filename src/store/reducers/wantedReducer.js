import { constants } from "../actions/wantedActions";
const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.LOAD_WANTED:
      return { ...state, wanted: payload.wanted };

    default:
      return state;
  }
};
