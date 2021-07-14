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
  editStaffProfile: (payload, _staffId) =>
    api.put(`/hotel/create-staff/${_staffId}`, payload),
  getStaffMembers: () => api.get("/hotel/getStaffMembers?all=true"),
  getStaffMemberById: (branchId) =>
    api.get(`/hotel/getStaffMembers?hotelId=${branchId}`),
  getStaffMemberByStaffId: (staffMemberId) =>
    api.get(`/hotel/getStaffMembers?staffMemberId=${staffMemberId}`),

  raiseTouristAlert: (payload, id) =>
    api.post(`hotel/raise-alert?touristId=${id}`, payload),

  getBranchData: (payload) => api.get(`/hotel/?branchId=${payload}`),
  getBranchDataByStaff: (payload) =>
    api.get(`/staff/getHotelInfo?branchId=${payload}`),
  contactUs: (payload) => api.post("/contactus", payload),
  socialLink: () => api.get("/social"),
  // /contactus

  updateStaff: (payload, id) => api.put(`/hotel/create-staff/${id}`, payload),

  getTouristDataById: (touristId) =>
    api.get(`/tourist/get-tourist?touristId=${touristId}`),

  leaveTourist: (payload) => api.post(`/tourist/leave-tourist`, payload),

  getTouristDataByBranch: (branchId) =>
    api.get(`/tourist/get-tourist-by-hotelId?hotelId=${branchId}`),
  getTouristDataFromStaffById: (touristId) =>
    api.get(`/tourist/get-tourist-by-hotelId?touristId=${touristId}`),
  createTouristByStaffBranch: (payload) =>
    api.post("/tourist/createBystaff", payload),
  createTouristByManagerInBranch: (payload) =>
    api.post("/tourist/createBymanager", payload),
};
