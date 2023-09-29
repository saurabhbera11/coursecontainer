import { createContext } from "react";
import React from "react";
const CurrentUserContext = createContext(null);
const CurrentUserDispatchContext = createContext(null);
import axios from "axios";

function userStore({ children }) {
  const initialUser = {
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    token: null,
  };
  const [currentUser, currentUserDispatch] = useReducer(
    userReducer,
    initialUser
  );

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentUserDispatchContext.Provider value={currentUserDispatch}>
        {children}
      </CurrentUserDispatchContext.Provider>
    </CurrentUserContext.Provider>
  );
}



async function userReducer(currentUser, action) {
  
}

export default userStore;
