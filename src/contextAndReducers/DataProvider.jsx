import {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { notifyError, notifySuccess, notifyInfo, notifyWarn} from "../utilities/Notifications";
const DataContext = createContext();
const useDataValues = () => useContext(DataContext);
const DataProvider = ({ children }) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  function reducer(state, action) {
    switch (action.type) {
      case "DATA":
        return {
          ...state,
          data: action.payload,
          backUpData: action.payload,
          Loader: false,
        };
      case "CATEGORY_DATA":
        return {
          ...state,
          categories: action.payload,
        };

      case "category":
        if (action.payload !== "Home") {
          const modifiedData = state.backUpData.filter(
            (item) => item.categoryName === action.payload
          );
          return {
            ...state,
            data: modifiedData,
          };
        } else
          return {
            ...state,
            data: state.backUpData,
          };
      case "VIDEO_CLICKED":
        return {
          ...state,
          currentPlayingVideo:
            state.backUpData[
              state.backUpData.findIndex((item) => item._id === action.payload)
            ],
        };
      case "LIKE":
        return { ...state, likedVideos: action.payload };
      case "WATCH_LATER":
        return { ...state, watchLater: action.payload };
      case "HISTORY":
        return { ...state, historyList: action.payload };
      case "PLAYLIST":
       
        return {
          ...state,
          playlistArr: action.payload,
        };
      case "PLAYLIST_VIDEO":
      
        const findPlaylistIndex = state.playlistArr.findIndex(
          (item) => item._id === action.payload._id
        );
        if (findPlaylistIndex === -1) {
         
          return {
            ...state,
            playlistArr: [...state.playlistArr, action.payload],
          };
        } else {
          state.playlistArr.splice(findPlaylistIndex, 1, action.payload);
         
          return {
            ...state,
            playlistArr: state.playlistArr,
          };
        }
      case "ASIDE":
        return { ...state, aside: !state.aside };

      default:
        break;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    backUpData: [],
    categories: [],
    Loader: true,
    aside: true,
    currentPlayingVideo: {},
    likedVideos: [],
    watchLater: [],
    historyList: [],
    playlistArr: [],
  });

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        modalDisplay,
        setModalDisplay,
        notifyError,
        notifySuccess,
        notifyInfo,
        notifyWarn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export { DataProvider, useDataValues };
