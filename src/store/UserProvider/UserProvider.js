import React, { createContext, useState } from "react";

const isUserLoggedIn = false;
const isAdmin = false;
const isMailVerified = false;

export const userContext = createContext(isUserLoggedIn);

const { Provider } = userContext;

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn);
  const [isAdminUser, setAdminUser] = useState(isAdmin);
  const [isConfirmed, setConfirmed] = useState(isMailVerified);

  const loginUser = () => setIsLoggedIn(true);
  const logoutUser = () => setIsLoggedIn(false);
  const adminUser = () => setAdminUser(true);
  const mailConfirmed = () => setConfirmed(true);

  return (
    <Provider
      value={{
        isUserLoggedIn: isLoggedIn,
        setUserLoggedIn: loginUser,
        setUserLoggedOut: logoutUser,
        isAdmin: isAdminUser,
        setAdminUser: adminUser,
        isMailVerified: isConfirmed,
        setMailVerified: mailConfirmed
      }}
    >
      {children}
    </Provider>
  );
};

export default UserProvider;
