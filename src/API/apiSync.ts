const API_BASE_URL: string = "https://janalight.fortiddns.com:8006/api/WebsiteSync";

export const API_ENDPOINTS = {
  GET_CATEGORIES:  `${API_BASE_URL}/GetMats`,
  SYNC_DATA: `${API_BASE_URL}/SyncData`,
  ADD_FATHER: `${API_BASE_URL}/AddFather`
};

export default API_BASE_URL;