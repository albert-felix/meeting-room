import React, { createContext, useState } from "react";

const isUserLoggedIn = false;
const isAdmin = false;

export const userContext = createContext(isUserLoggedIn);

const { Provider } = userContext;

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn);
  const [isAdminUser, setAdminUser] = useState(isAdmin);

  const loginUser = () => setIsLoggedIn(true);
  const logoutUser = () => setIsLoggedIn(false);
  const adminUser = () => setAdminUser(true);
  const notAdminUser = () => setAdminUser(false);

  return (
    <Provider
      value={{
        isUserLoggedIn: isLoggedIn,
        setUserLoggedIn: loginUser,
        setUserLoggedOut: logoutUser,
        isAdmin: isAdminUser,
        setAdminUser: adminUser,
        setNotAdminUser: notAdminUser
      }}
    >
      {children}
    </Provider>
  );
};

export default UserProvider;
