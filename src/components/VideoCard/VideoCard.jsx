import "./VideoCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDataValues } from "../../contextAndReducers/DataProvider";
import { useWatchLaterActions } from "../../utilities/CustomHooks";
function MenuCard({ obj }) {
  const { makeWatchLater, deleteFromWatchLater } = useWatchLaterActions();
  const { state } = useDataValues();
  const { _id: id } = obj;
  const findItemIndex = state.watchLater.findIndex((item) => item._id === id);
  return (
    <div className="menu-video-card">
      <p className="menu-card-options">
        <i className="material-icons md-dark padding-l-r">list</i>Add to
        playlist
      </p>
      {findItemIndex === -1 && (
        <p className="menu-card-options" onClick={() => makeWatchLater(obj)}>
          <i className="material-icons md-dark md-18 padding-l-r">schedule</i>
          Watch Later
        </p>
      )}
      {findItemIndex > -1 && (
        <p
          className="menu-card-options"
          onClick={() => deleteFromWatchLater(id)}
        >
          <i className="material-icons md-dark md-18 padding-l-r">schedule</i>
          Remove watch Later
        </p>
      )}
    </div>
  );
}
function VideoCard({
  contentPhoto,
  contentPhotoAlt,
  creatorPhoto,
  creatorPhotoAlt,
  thumbNail,
  creatorName,
  id,
  obj,
}) {
  const [menu, setMenu] = useState(false);
  const { dispatch } = useDataValues();
  return (
    <div
      onClick={() => {
        dispatch({ type: "VIDEO_CLICKED", payload: id });
      }}
    >
      <div className="vid-content-image">
        {/* content photo */}
        <Link to={`/singleVideo-page/${id}`}>
          <img src={contentPhoto} alt={contentPhotoAlt} />
        </Link>
      </div>
      <div className="card-text-content">
        <div className="vid-creator-image">
          {/* Creators photo */}
          <img
            src={creatorPhoto}
            className="circle-border-radius"
            alt={creatorPhotoAlt}
          />
        </div>
        <div className="vid-card-description">
          {menu && <MenuCard obj={obj} />}

          <span className="text thumbnail">
            <Link to={`/singleVideo-page/${id}`}>{thumbNail} </Link>
          </span>

          <span className="sub-text details">
            <Link to={`/singleVideo-page/${id}`}>{creatorName}</Link>
          </span>
        </div>
        <div className="vid-menu-option " onClick={() => setMenu(!menu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export { VideoCard };
