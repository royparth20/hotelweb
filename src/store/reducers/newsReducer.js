import { constants } from "../actions/newsActions";
const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.LOAD_NEWS:
      return { ...state, news: payload.news };

    default:
      return state;
  }
};
