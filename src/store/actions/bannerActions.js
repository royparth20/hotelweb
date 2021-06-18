export const constants = {
  LOAD_BANNER: "[banner] load banner",
};

export const bannerActions = {
  loadBanner: (banner) => ({ type: constants.LOAD_BANNER, payload: { banner } }),
};

// eslint-disable-next-line import/no-anonymous-default-export
