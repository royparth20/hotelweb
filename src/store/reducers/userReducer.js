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
      return userActions.methods.getHotelDetails(payload);

    default:
      return state;
  }
};
