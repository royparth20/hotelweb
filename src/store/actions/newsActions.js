export const constants = {
  LOAD_NEWS: "[news] load news",
};

export const newsActions = {
  loadNews: (news) => ({ type: constants.LOAD_NEWS, payload: { news } }),
};
