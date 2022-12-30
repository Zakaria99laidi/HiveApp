import { create } from "apisauce";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "https://app.hive.al/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const token = await authStorage.getToken();
  if (!token) return;
  request.headers["Authorization"] = "Bearer " + token;
});

export default apiClient;
