import { useEffect } from "react";
import axios from "axios";
import { useDataValues } from "../contextAndReducers/DataProvider";

const useFetchingData = () => {
    const { dispatch } = useDataValues();
  // Fetching initial value from the server
  async function fetchData() {
    try {
      const { data } = await axios.get("/api/videos");
      console.log(data.videos);
      dispatch({ type: "DATA", payload: data.videos });
    } catch (error) {
      console.log(error);
    }
  }

  return { fetchData };
};



const useUserDetails = () => {
  const { authState, authDispatch } = useAuthorization();
  const signUpHandler = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "SIGN_IN",
        value: response.data.foundUser,
      });
      authDispatch({
        type: "TOAST",
        payload: {
          display: "flex",
          message: "User Signed in",
          type: "success",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // to help user in login in the application
  const logInHandler = async (email, password) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      // console.log(response);
      authDispatch({ type: "LOG_IN", payload: response.data.foundUser });
      authDispatch({
        type: "TOAST",
        payload: {
          display: "flex",
          message: "User logged in",
          type: "success",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return { logInHandler, signUpHandler };
};








export { useFetchingData ,useUserDetails};
