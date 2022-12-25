import * as SecureStore from "expo-secure-store";

const key = "token";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.error("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error("Error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("Error removing the auth token", error);
  }
};

export default {
  getToken,
  storeToken,
  removeToken,
};
