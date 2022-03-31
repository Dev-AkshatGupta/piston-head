import { createContext, useContext, useReducer, useEffect } from "react";
// import { useFetchingData } from "../utilities/CustomHooks";
const DataContext = createContext();
const useDataValues = () => useContext(DataContext);
const DataProvider = ({ children }) => {
  function reducer(state, action) {
    switch (action.type) {
      case "DATA":
        return {
          ...state,
          data: action.payload,
          backUpData: action.payload,
          Loader: false,
        };
      case "category":
        if (action.payload !== "Home") {
          const modifiedData = state.backUpData.filter(
            (item) => item.categoryName === action.payload
          );
          console.log("askshauhfe");
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
        console.log(action.payload);
        return {
          ...state,
          currentPlayingVideo:
            state.backUpData[
              state.backUpData.findIndex((item) => item._id === action.payload)
            ],
        };
      case "ASIDE":
        return { ...state, aside: !state.aside };

      default:
        break;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    backUpData: [],
    Loader: true,
    aside: true,
    currentPlayingVideo: {},
  });

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export { DataProvider, useDataValues };
