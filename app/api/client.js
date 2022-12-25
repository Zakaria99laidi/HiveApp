import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://app.hive.al/api",
});

export default apiClient;
