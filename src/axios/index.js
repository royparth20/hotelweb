import api from "./axios";

export default {
  signup: (payload) => api.post("/users", payload),
  login: (payload) => api.post("/users/login", payload),
  loginStaff: (payload) => api.post("/staff/login", payload),

  getHotel: () => api.get("/hotel"),
  getHotelDetails: () => api.get("/hotel/getHotelDetails"),
  createBranch: (payload) => api.post("hotel/create-branch", payload),
  updateBranch: (payload, id) =>
    api.put(`hotel/create-branch?branchId=${id}`, payload),
  // hotel/create-branch
  socialLogin: (payload) => api.post("/users/social", payload),

  // Location END Points
  getCountryList: () => api.get("/location/country"),
  getStateList: (countryId) =>
    api.get(`/location/state?countryId=${countryId}`),
  getCityList: (stateId) => api.get(`location/city?stateId=${stateId}`),

  // UPLOAD FILE END Points
  uploadFile: (payload) => api.post("/files", payload),

  editProfile: (payload) => api.put(`/hotel/edit-profile`, payload),
  getStaffMembers: () => api.get("/hotel/getStaffMembers?all=true"),
  getStaffMemberById: (branchId) =>
    api.get(`/hotel/getStaffMembers?hotelId=${branchId}`),

  raiseTouristAlert: (payload) =>
    api.post(`hotel/raise-alert?touristId=${payload}`),

  getBranchData: (payload) => api.get(`/hotel/?branchId=${payload}`),
};
