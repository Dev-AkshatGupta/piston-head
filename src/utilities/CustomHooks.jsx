import { useEffect } from "react";
import axios from "axios";
import { useDataValues } from "../contextAndReducers/DataProvider";
import { useAuthorization } from "../contextAndReducers/AuthProvider";
import { Action } from "history";
const useFetchingData = () => {
  const { dispatch } = useDataValues();
  // Fetching initial value from the server
  async function fetchData() {
    try {
      const { data } = await axios.get("/api/videos");

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

const useLikeActions = () => {
  const { dispatch } = useDataValues();
  // function for getting the initial data from the db
  const getLikedVideos = async () => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get(`/api/user/likes`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "LIKE", payload: response.data.likes });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // function making a post request to the backend
  const likeVideo = async (video) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/user/likes`,
        {
          video,
        },
        {
          headers: {
            authorization: encodedToken, // passing token as an authorization header
          },
        }
      );
      dispatch({ type: "LIKE", payload: response.data.likes });
    } catch (error) {
      console.log(error);
    }
  };
  // function making a delete request to the backend
  const disLikeVideo = async (videoId) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      console.log(response);
      dispatch({ type: "LIKE", payload: response.data.likes });
    } catch (error) {
      console.log(error);
    }
  };
  return { getLikedVideos, likeVideo, disLikeVideo };
};

const useWatchLaterActions = () => {
  const { dispatch } = useDataValues();
  // function for getting the initial data from the db
  const getWatchLater = async () => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get(`/api/user/watchlater`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        console.log(response.data.watchlater);
        dispatch({ type: "WATCH_LATER", payload: response.data.watchlater });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // function making a post request to the backend
  const makeWatchLater = async (video) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/user/watchlater`,
        {
          video,
        },
        {
          headers: {
            authorization: encodedToken, // passing token as an authorization header
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "WATCH_LATER", payload: response.data.watchlater });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // function making a delete request to the backend
  const deleteFromWatchLater = async (videoId) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        console.log(response);
        dispatch({ type: "WATCH_LATER", payload: response.data.watchlater });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { getWatchLater, makeWatchLater, deleteFromWatchLater };
};
const useVideoHistory = () => {
  const { dispatch } = useDataValues();
  // to get the primary data of the history
  const getHistory = async () => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get(`/api/user/history`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        console.log(response.data.history);
        dispatch({
          type: "HISTORY",
          payload: response.data.history,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // post request to the api
  const history = async (video) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/user/history`,
        {
          video,
        },
        {
          headers: {
            authorization: encodedToken, // passing token as an authorization header
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "HISTORY", payload: response.data.history });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteHistory = async (videoId) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(` /api/user/history/${videoId}`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        console.log(response);
        dispatch({ type: "HISTORY", payload: response.data.history });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteAllHistory = async () => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(` /api/user/history/all`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        console.log(response);
        dispatch({ type: "HISTORY", payload: response.data.history });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { getHistory, history, deleteHistory, deleteAllHistory };
};

const usePlayListActions = () => {
  const { dispatch } = useDataValues();
  // to get the data
  // const getPlayList
};

export {
  useFetchingData,
  useUserDetails,
  useLikeActions,
  useWatchLaterActions,
  useVideoHistory,
  usePlayListActions,
};
