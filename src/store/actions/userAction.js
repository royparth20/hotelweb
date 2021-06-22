const actions = {
  USER_DETAILS: "USER_DETAILS",
};

const methods = {
  getHotelDetails: (payload) => {
    return {
      ...payload,
    };
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { actions, methods };
