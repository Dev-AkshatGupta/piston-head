import "./VideoCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { VerticalEllipsis } from "../../IconsAndAssets/Icons/VerticlElipssis";
import { useDataValues } from "../../contextAndReducers/DataProvider";
import {
  useWatchLaterActions,
  useVideoHistory,
} from "../../utilities/CustomHooks";
import { MenuCard } from "./MenuCard";

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
  const { history } = useVideoHistory();

  return (
    <div
      onClick={() => {
        dispatch({ type: "VIDEO_CLICKED", payload: id });
      }}
    >
      <div className="vid-content-image">
        {/* content photo */}
        <Link to={`/singleVideo-page/${id}`} onClick={() => history(obj)}>
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
          {menu && <MenuCard obj={obj} setMenu={setMenu} menu={menu} />}

          <span className="text thumbnail">
            <Link to={`/singleVideo-page/${id}`}>{thumbNail} </Link>
          </span>

          <span className="sub-text details">
            <Link to={`/singleVideo-page/${id}`} onClick={() => history(obj)}>
              {creatorName}
            </Link>
          </span>
        </div>
        <div className="vid-menu-option " onClick={() => setMenu(!menu)}>
          <span className="pointer">
            {" "}
            <VerticalEllipsis />
          </span>
        </div>
      </div>
    </div>
  );
}
export { VideoCard };
