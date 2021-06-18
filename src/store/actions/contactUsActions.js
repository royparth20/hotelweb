export const constants = {
  CONTACT_US: "[contactUsPayload] load news",
};

export const contactUsActions = {
  contactUs: (contactUsPayload) => ({ type: constants.CONTACT_US, payload: { contactUsPayload } }),
};
