import { createContext, useState } from "react";

export const AuthContext = createContext();

function CustomProviderComp({ children }) {
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  const changeStatusOfAdmin = (value) => {
    setIsAdmin(value);
  };
  return (
    <AuthContext.Provider
      value={{ isloggedin, login, logout, isAdmin, changeStatusOfAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default CustomProviderComp;
