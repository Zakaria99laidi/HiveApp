import apiClient from "./client";

const endpoint = "/auth/register";

const register = (userInfo) => apiClient.post(endpoint, userInfo);

export default {
  register,
};
