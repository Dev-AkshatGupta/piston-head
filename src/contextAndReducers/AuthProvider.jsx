import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const useAuthorization = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  //   reducer function for handling signUp and login
  const reducer = (state, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return {
          ...state,
          firstName: action.payload.createdUser.firstName,
          id: action.payload.createdUser.id,
          watchlater: action.payload.createdUser.watchlater,
          playlists: action.payload.createdUser.playlists,
          history: action.payload.createdUser.history,
          likes: action.payload.createdUser.likes,
          token: action.payload.encodedToken,
          currentUser: action.payload.createdUser,
        };

      case "LOG_IN":
        return {
          ...state,
          firstName: action.payload.foundUser.firstName,
          id: action.payload.foundUser.id,
          watchlater: action.payload.foundUser.watchlater,
          playlists: action.payload.foundUser.playlists,
          history: action.payload.foundUser.history,
          likes: action.payload.foundUser.likes,
          token: action.payload.encodedToken,
          currentUser: action.payload.foundUser,
        };

      case "VERIFY_USER":
        return {
          ...state,
          firstName: action.payload.foundUser.firstName,
          id: action.payload.foundUser.id,
          watchlater: action.payload.foundUser.watchlater,
          playlists: action.payload.foundUser.playlists,
          history: action.payload.foundUser.history,
          likes: action.payload.foundUser.likes,
          token: action.payload.encodedToken,
          currentUser: action.payload.foundUser,
        };
      case "TOAST":
        return { ...state, toast: action.payload };
      default:
        break;
    }
  };

  const [authState, authDispatch] = useReducer(reducer, {
    firstName: "",
    id: "",
    token: "",
    likes: [],
    history: [],
    playlists: [],
    watchlater: [],
    currentUser: {},
  });

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthorization, AuthProvider };
