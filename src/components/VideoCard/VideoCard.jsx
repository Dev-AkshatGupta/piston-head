import "./VideoCard.css";
import { useState } from "react";
import { useDataValues } from "../../contextAndReducers/DataProvider";
function MenuCard() {
  return (
    <div className="menu-video-card">
      <p className="menu-card-options">
        <i className="material-icons md-dark padding-l-r">list</i>Add to
        playlist
      </p>
      <p className="menu-card-options">
        <i className="material-icons md-dark md-18 padding-l-r">schedule</i>
        Watch Later
      </p>
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
}) {
  const [menu, setMenu] = useState(false);
  const { dispatch } = useDataValues();
  return (
    <div
      onClick={() => {
        console.log("Videocard clicked");
        dispatch({ type: "VIDEO_CLICKED", payload: id });
      }}
    >
      <div className="vid-content-image">
        {/* content photo */}
        <img src={contentPhoto} alt={contentPhotoAlt} />
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
          {menu && <MenuCard />}
          <span className="text thumbnail">{thumbNail}</span>
          <span className="sub-text details">{creatorName}</span>
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
