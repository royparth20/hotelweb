import authReducer from "./authReducer";
import newsReducer from "./newsReducer";
import uiReducer from "./uiReducer";
import wantedReducer from "./wantedReducer";
import bannerReducer from "./bannerReducer";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  auth: authReducer,
  ui: uiReducer,
  news: newsReducer,
  wanted: wantedReducer,
  banner: bannerReducer
};
