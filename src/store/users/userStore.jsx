import { createContext, useReducer } from "react";
import React from "react";

// Create a context for managing user states
const UserContext = createContext(null);

// Define a user reducer to handle user actions
function userReducer(users, action) {
  switch (action.type) {
    case "LOGIN":
      // Add the user to the list of logged-in users
      return {
      };
    case "LOGOUT":
      return 
    default:
      return users;
  }
}

function UserStore({ children }) {
  // Initialize the users state as an empty object
  const [users, dispatch] = useReducer(userReducer, {});

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserStore };