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
       const {encodedToken:token}=JSON.parse(action.payload.config.data);
        return {
          ...state,
          firstName: action.payload.data.user.firstName,
          id: action.payload.data.user.id,
          watchlater: action.payload.data.user.watchlater,
          playlists: action.payload.data.user.playlists,
          history: action.payload.data.user.history,
          likes: action.payload.data.user.likes,
          token,
          currentUser: action.payload.data.user,
        };
      case "TOAST":
        return { ...state, toast: action.payload };
        case "LOG_OUT":
          localStorage.removeItem("token")
          return {
            firstName: "",
            id: "",
            token: "",
            likes: [],
            history: [],
            playlists: [],
            watchlater: [],
            currentUser: {},
          };
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
