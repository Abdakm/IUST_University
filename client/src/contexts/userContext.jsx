import { useState, createContext, useContext } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const getCookieUser = () => {
    const cookieValue = Cookies.get("username");
    try {
      // Try to parse as JSON
      return cookieValue ? JSON.parse(cookieValue) : null;
    } catch (e) {
      // If parsing fails, return the string directly
      return cookieValue || null;
    }
  };

  const [user, setUser] = useState(getCookieUser());

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useStore = () => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return user;
};
