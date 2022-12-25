import apiClient from "./client";

const login = (email, password) =>
  apiClient.post("/auth/login", { email, password });

export default {
  login,
};
