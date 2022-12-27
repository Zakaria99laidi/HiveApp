import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { authToken, setAuthToken } = useContext(AuthContext);

  const logOut = () => {
    setAuthToken(null);
    authStorage.removeToken();
  };

  const logIn = (authToken) => {
    setAuthToken(authToken);
    authStorage.storeToken(authToken);
  };

  return { authToken, logIn, logOut };
};
