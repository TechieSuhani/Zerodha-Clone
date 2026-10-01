const productionApiUrl = "https://zerodha-clone-backend-fowh.onrender.com";

export const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3002"
    : productionApiUrl);