import { constants } from "../actions/bannerActions";
const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.LOAD_BANNER:
      return { ...state, banner: payload.banner };

    default:
      return state;
  }
};
