const productionApiUrl = "https://zerodha-clone-production-cb53.up.railway.app";

export const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3002"
    : productionApiUrl);