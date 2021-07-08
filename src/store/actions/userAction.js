const actions = {
  USER_DETAILS: "USER_DETAILS",
  SET_BRANCH: "SET_BRANCH",
  UPDATE_HOTEL_LOGO: "UPDATE_HOTEL_LOGO",
};

const methods = {
  getHotelDetails: (state, payload) => {
    return {
      ...payload,
    };
  },
  setBranches: (state, payload) => {
    return {
      ...state,
      ...payload,
    };
  },
  updateHoteLogo: (state, payload) => {
    return {
      ...state,
      ...payload,
    };
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { actions, methods };
