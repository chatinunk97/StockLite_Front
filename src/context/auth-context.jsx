import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import {
  getAccessToken,
  addAccessToken,
  removeAccesToken,
} from "../utils/token-storage";
import { Alert3Choice, AlertOK } from "../utils/sweetAlert";

export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [LoginUser, setLoginUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/manage/user")
        .then((res) => setLoginUser(res.data))
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const loginFunction = async (validatedInput) => {
    const loginResult = await axios.post("/manage/login", validatedInput);
    addAccessToken(loginResult.data.accessToken);
    AlertOK(loginResult.data.user.username).then((response) => {
      if (response.value || response.dismiss) {
        setLoginUser(loginResult.data.user);
      }
    });
  };
  const logOutFunction = () => {
    Alert3Choice(
      "Are you sure you want to Logout?",
      false,
      "Confirm",
      "Cancel"
    ).then((res) => {
      if (res.value) {
        removeAccesToken();
        setLoginUser(null);
      }
    });
  };
  const sharedObj = {
    LoginUser,
    setLoginUser,
    loginFunction,
    logOutFunction,
    isLoading,
  };
  return (
    <AuthContext.Provider value={sharedObj}>{children}</AuthContext.Provider>
  );
}
