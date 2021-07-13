import userActions from "../actions/userAction";

const initialState = {
  address: "",
  approved: false,
  branches: [],
  city: "",
  country: "",
  district: "",
  email: "",
  enableStatus: false,
  hotelGrade: "",
  hotelImages: [],
  hotelLicense: "",
  hotelLogo: "",
  hotelName: "",
  hotelTelephoneNumber: "",
  map: {},
  ownerCurrentAddress: "",
  ownerName: "",
  ownerPermanentAddress: "",
  ownerTelephoneNumber: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActions.actions.USER_DETAILS:
      return userActions.methods.getHotelDetails(state, payload);
    case userActions.actions.SET_BRANCH:
      // console.log("userActions.actions.SET_BRANCH", { ...state }, payload);
      return {
        ...state,
        branches: [...state.branches, payload],
      };
    case userActions.actions.UPDATE_HOTEL_LOGO:
      // console.log(
      //   "userActions.actions.UPDATE_HOTEL_LOGO",
      //   { ...state },
      //   payload
      // );
      return userActions.methods.updateHoteLogo(state, payload);
    case userActions.actions.CLEAR_USER:
      return userActions.methods.clearUser(initialState);
    default:
      return state;
  }
};
