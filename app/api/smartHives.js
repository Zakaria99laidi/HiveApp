import apiClient from "./client";

const endpoint = "/hive";

const getSmartHives = () => apiClient.get(endpoint);

export default {
  getSmartHives,
};
