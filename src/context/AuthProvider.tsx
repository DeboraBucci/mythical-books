import { createContext } from "react";

export const AuthContext = createContext({
  token: "",
  setToken: (token: string) => {},
  getToken: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const setToken = (token: string) => {
    if (token) localStorage.setItem("token", token);
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const values = {
    token: localStorage.getItem("token") ?? "",
    setToken: setToken,
    getToken: getToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
