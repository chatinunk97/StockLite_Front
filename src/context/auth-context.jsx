import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { getAccessToken, addAccessToken } from "../utils/token-storage";
import Swal from "sweetalert2";

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
    Swal.fire(
      "Login Success",
      `Welcome back , ${validatedInput.usernameOrEmail}`,
      "success"
    ).then((response) => {
      if (response.value) {
        setLoginUser(loginResult.data.user);
      }
    });
  };
  const logOutFunction = () => {};
  const sharedObj = { LoginUser, setLoginUser, loginFunction, isLoading };
  return (
    <AuthContext.Provider value={sharedObj}>{children}</AuthContext.Provider>
  );
}
