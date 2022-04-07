import "./VideoCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDataValues } from "../../contextAndReducers/DataProvider";
import { useAuthorization } from "../../contextAndReducers/AuthProvider";
import {
  useWatchLaterActions,
  useVideoHistory,
} from "../../utilities/CustomHooks";
function MenuCard({ obj, setMenu, menu }) {
  const { makeWatchLater, deleteFromWatchLater } = useWatchLaterActions();

  const { state, modalDisplay, setModalDisplay } = useDataValues();
  const { _id: id } = obj;
  const findItemIndex = state.watchLater.findIndex((item) => item._id === id);
  const {
    authState: { token },
  } = useAuthorization();
  return (
    <div className="menu-video-card">
      {token ? (
        <p
          className="menu-card-options"
          onClick={() => {
            setModalDisplay(!modalDisplay);
          }}
        >
          <i className="material-icons md-dark padding-l-r">list</i>Add to
          playlist
        </p>
      ) : (
        <p className="menu-card-options">
          <Link to="/logIn-page">
            <i className="material-icons md-dark padding-l-r">list</i>Add to
            playlist
          </Link>
        </p>
      )}
      {findItemIndex === -1 && !token ? (
        <p className="menu-card-options">
          <Link to="/logIn-page">
            <i className="material-icons md-dark md-18 padding-l-r">schedule</i>
            Watch Later
          </Link>
        </p>
      ) : (
        findItemIndex === -1 && (
          <p
            className="menu-card-options"
            onClick={() => {
              makeWatchLater(obj);
              setMenu(!menu);
            }}
          >
            <i className="material-icons md-dark md-18 padding-l-r">schedule</i>
            Watch Later
          </p>
        )
      )}
      {findItemIndex > -1 && (
        <p
          className="menu-card-options"
          onClick={() => {
            deleteFromWatchLater(id);
            setMenu(!menu);
          }}
        >
          <i className="material-icons md-dark md-18 padding-l-r">schedule</i>
          Remove watch Later
        </p>
      )}
    </div>
  );
}
export { MenuCard };
