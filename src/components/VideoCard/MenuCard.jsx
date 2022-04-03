import "./VideoCard.css";
import { useState } from "react";
import { useDataValues } from "../../contextAndReducers/DataProvider";
import {
  useWatchLaterActions,
  useVideoHistory,
} from "../../utilities/CustomHooks";
function MenuCard({ obj, setMenu, menu }) {
  const { makeWatchLater, deleteFromWatchLater } = useWatchLaterActions();

  const { state, modalDisplay, setModalDisplay } = useDataValues();
  const { _id: id } = obj;
  const findItemIndex = state.watchLater.findIndex((item) => item._id === id);

  return (
    <div className="menu-video-card">
      <p
        className="menu-card-options"
        onClick={() => {
          setModalDisplay(!modalDisplay);
        }}
      >
        <i className="material-icons md-dark padding-l-r">list</i>Add to
        playlist
      </p>
      {findItemIndex === -1 && (
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
export {MenuCard};