import api from "./axios";

export default {
  signup: (payload) => api.post("/users", payload),
  login: (payload) => api.post("/users/login", payload),

  getHotel: () => api.get("/hotel"),
  getHotelDetails: () => api.get("/hotel/getHotelDetails"),
  createBranch: (payload) => api.post("hotel/create-branch", payload),
  // hotel/create-branch
  socialLogin: (payload) => api.post("/users/social", payload),
  // getBannerData: () => api.get("/users/get-banner"),
  // getUserInfo: () => api.get("/users"),
  // updateUserInfo: (payload) => api.put("/users/edit-profile", payload),
  // contactUs: (payload) => api.post("/users/contact-us", payload),
  // getNews: () => api.get("/news"),
  // getNewsById: (id) => api.get(`/news/${id}`),

  // getWantedList: () => api.get("/wanted-list"),
  // getWantedListById: (id) => api.get(`/wanted-list/${id}`),

  // createReport: (payload) => api.post("/reports", payload),
  // raiseAlert: (payload) => api.post("/raiseAlert", payload),

  uploadFile: (payload) => api.post("/files", payload),

  editProfile: (payload) => api.put(`/hotel/edit-profile`, payload),
  getStaffMembers: () => api.get("/hotel/getStaffMembers?all=true"),
  // createReportTerroristRelation: (payload) =>
  //   api.post("/reports/terrorist-relation", payload),
  // createReportIllegalWeaponOwner: (payload) =>
  //   api.post("/reports/illegal-weapon-owner", payload),
  // createReportSuspiciousHouses: (payload) =>
  //   api.post("/reports/suspicious-houses", payload),
  // createReportSuspiciousPeoples: (payload) =>
  //   api.post("/reports/suspicious-peoples", payload),
  // createReportDrugDealer: (payload) =>
  //   api.post("/reports/drug-dealer", payload),
};
