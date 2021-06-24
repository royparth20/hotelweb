import api from "./axios";

export default {
  signup: (payload) => api.post("/users", payload),
  login: (payload) => api.post("/users/login", payload),

  getHotel: () => api.get("/hotel"),
  getHotelDetails: () => api.get("/hotel/getHotelDetails"),
  socialLogin: (payload) => api.post("/users/social", payload),
  getBannerData: () => api.get("/users/get-banner"),
  getUserInfo: () => api.get("/users"),
  updateUserInfo: (payload) => api.put("/users/edit-profile", payload),
  contactUs: (payload) => api.post("/users/contact-us", payload),
  getNews: () => api.get("/news"),
  getNewsById: (id) => api.get(`/news/${id}`),

  getWantedList: () => api.get("/wanted-list"),
  getWantedListById: (id) => api.get(`/wanted-list/${id}`),

  createReport: (payload) => api.post("/reports", payload),
  raiseAlert: (payload) => api.post("/raiseAlert", payload),

  uploadFile: (payload) => api.post("/files", payload),

  createReportWantedCriminal: (payload, criminal_id) =>
    api.put(`/reports/wanted-criminal?crimianlId=${criminal_id}`, payload),
  createReportTerroristRelation: (payload) =>
    api.post("/reports/terrorist-relation", payload),
  createReportIllegalWeaponOwner: (payload) =>
    api.post("/reports/illegal-weapon-owner", payload),
  createReportSuspiciousHouses: (payload) =>
    api.post("/reports/suspicious-houses", payload),
  createReportSuspiciousPeoples: (payload) =>
    api.post("/reports/suspicious-peoples", payload),
  createReportDrugDealer: (payload) =>
    api.post("/reports/drug-dealer", payload),
};
