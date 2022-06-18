import axios from "axios";
import { useDataValues } from "../contextAndReducers/DataProvider";
import { useAuthorization } from "../contextAndReducers/AuthProvider";
const token = () => {
  return localStorage.getItem("token");
};

const useFetchingData = () => {
  const { dispatch, notifyError, notifySuccess, notifyInfo, notifyWarn } =
    useDataValues();
  // Fetching initial value from the server
  async function fetchData() {
    try {
      const { data } = await axios.get("/api/videos");

      dispatch({ type: "DATA", payload: data.videos });
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCategoriesData() {
    try {
      const { data } = await axios.get("/api/categories");

      dispatch({ type: "CATEGORY_DATA", payload: data.categories });
    } catch (error) {
      console.log(error);
    }
  }

  return { fetchData, fetchCategoriesData };
};

const useUserDetails = () => {
  const { authDispatch } = useAuthorization();
  const { notifySuccess } = useDataValues();
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
        payload: response.data,
      });

      notifySuccess("User signed up");
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
      authDispatch({ type: "LOG_IN", payload: response.data });

      // dispatch({ type: "LOGGED_IN ",payload:response.data});
      notifySuccess("User logged in");
    } catch (error) {
      console.log(error);
    }
  };

  const verifyUserHandler = async () => {
    const encodedToken = localStorage.getItem("token");
    if (encodedToken) {
      try {
        const response = await axios.post("api/auth/verify", {
          encodedToken: encodedToken,
        });    
        authDispatch({ type: "VERIFY_USER", payload: response });
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return { logInHandler, signUpHandler, verifyUserHandler };
};

const useLikeActions = () => {
  const { dispatch, notifyError, notifySuccess, notifyInfo, notifyWarn } =
    useDataValues();
  // function for getting the initial data from the db
  const getLikedVideos = async () => {
    const encodedToken = token();
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
    const encodedToken = token();
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
      notifyInfo("Liked the video");
    } catch (error) {
      console.log(error);
    }
  };
  // function making a delete request to the backend
  const disLikeVideo = async (videoId) => {
    const encodedToken = token();
    try {
      const response = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });

      dispatch({ type: "LIKE", payload: response.data.likes });
      notifyWarn("Disliked the video");
    } catch (error) {
      console.log(error);
    }
  };
  return { getLikedVideos, likeVideo, disLikeVideo };
};

const useWatchLaterActions = () => {
  const { dispatch, notifyError, notifySuccess, notifyInfo, notifyWarn } =
    useDataValues();
  // function for getting the initial data from the db
  const getWatchLater = async () => {
    const encodedToken = token();
    try {
      const response = await axios.get(`/api/user/watchlater`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "WATCH_LATER", payload: response.data.watchlater });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // function making a post request to the backend
  const makeWatchLater = async (video) => {
    const encodedToken = token();
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
        notifySuccess("added to watch later");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // function making a delete request to the backend
  const deleteFromWatchLater = async (videoId) => {
    const encodedToken = token();
    try {
      const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "WATCH_LATER", payload: response.data.watchlater });
        notifyWarn("Deleted from watch later");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { getWatchLater, makeWatchLater, deleteFromWatchLater };
};
const useVideoHistory = () => {
  const { dispatch, notifyError, notifySuccess, notifyInfo, notifyWarn } =
    useDataValues();
  // to get the primary data of the history
  const getHistory = async () => {
    const encodedToken = token();
    try {
      const response = await axios.get(`/api/user/history`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
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
    const encodedToken = token();
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
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "HISTORY", payload: response.data.history });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteHistory = async (videoId) => {
    const encodedToken = token();
    try {
      const response = await axios.delete(`/api/user/history/${videoId}`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "HISTORY", payload: response.data.history });
        notifyWarn("Deleted the Video from History");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteAllHistory = async () => {
    const encodedToken = token();
    try {
      const response = await axios.delete(`/api/user/history/all`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "HISTORY", payload: response.data.history });
        notifyWarn("Deleted whole History");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { getHistory, history, deleteHistory, deleteAllHistory };
};

const usePlayListActions = () => {
  const { dispatch, notifyError, notifySuccess, notifyInfo, notifyWarn } =
    useDataValues();
  // function for getting the initial data from the db
  const getPlaylists = async () => {
    const encodedToken = token();
    try {
      const response = await axios.get(`/api/user/playlists`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "PLAYLIST", payload: response.data.playlists });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const newPlayList = async (title, description) => {
    const encodedToken = token();
    try {
      const response = await axios.post(
        `/api/user/playlists`,
        {
          playlist: { title, description },
        },
        {
          headers: {
            authorization: encodedToken, // passing token as an authorization header
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "PLAYLIST", payload: response.data.playlists });
        notifySuccess("New playlist created");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deletePlayList = async (playListId) => {
    const encodedToken = token();
    try {
      const response = await axios.delete(`/api/user/playlists/${playListId}`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "PLAYLIST", payload: response.data.playlists });
        notifyWarn("Playlist Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { getPlaylists, newPlayList, deletePlayList };
};

const usePlayListVideoActions = () => {
  const { dispatch, notifyError, notifySuccess, notifyInfo, notifyWarn } =
    useDataValues();
  // function for getting the initial data from the db
  const getTheVideosOfPlayList = async (playListId) => {
    const encodedToken = token();
    try {
      const response = await axios.get(`/api/user/playlists/${playListId}`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "PLAYLIST", payload: response.data.playlist });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // post the data in the playlist
  const addVideoToPlayList = async (playListId, video) => {
    const encodedToken = token();
    try {
      const response = await axios.post(
        `/api/user/playlists/${playListId}`,
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
        dispatch({ type: "PLAYLIST_VIDEO", payload: response.data.playlist });
        notifyInfo("Video added in playlist");
      }
    } catch (error) {
      console.log("Error in the accVideoToPlayList" + error);
    }
  };
  const removeVideoFromPlaylist = async (videoId, playListId) => {
    const encodedToken = token();
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playListId}/${videoId}`,
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      dispatch({ type: "PLAYLIST_VIDEO", payload: response.data.playlist });
      notifyWarn("video removed from the playlist");
    } catch (error) {
      console.log("Error in remove video to playlist handler", error);
    }
  };
  return {
    getTheVideosOfPlayList,
    addVideoToPlayList,
    removeVideoFromPlaylist,
  };
};

export {
  useFetchingData,
  useUserDetails,
  useLikeActions,
  useWatchLaterActions,
  useVideoHistory,
  usePlayListActions,
  usePlayListVideoActions,
};
