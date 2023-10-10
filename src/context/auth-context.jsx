import { createContext } from "react";


export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const sharedObj = { message: "from context" };
  return <AuthContext.Provider value={sharedObj}>{children}</AuthContext.Provider>;
}