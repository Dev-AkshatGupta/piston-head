import "./PlayListCard.css";
import { Link } from "react-router-dom";

import {
  useVideoHistory,
  usePlayListVideoActions,
} from "../../utilities/CustomHooks";
import { ImBin2 } from "react-icons/im";
function PlayListCard({
  contentPhoto,
  contentPhotoAlt,
  creatorPhoto,
  creatorPhotoAlt,
  thumbNail,
  creatorName,
  id,
  obj,
  playlistId,
}) {
  const { history } = useVideoHistory();
  const { removeVideoFromPlaylist } = usePlayListVideoActions();
  return (
    <div>
      <div className="vid-content-image">
        {/* content photo */}
        <Link to={`/singleVideo-page/${id}`} onClick={() => history(obj)}>
          <img src={contentPhoto} alt={contentPhotoAlt} />
        </Link>
        <ImBin2
          className="text bin-delete"
          onClick={() => removeVideoFromPlaylist(id, playlistId)}
        />
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
          <span className="text thumbnail">
            <Link to={`/singleVideo-page/${id}`} onClick={() => history(obj)}>
              {thumbNail}{" "}
            </Link>
          </span>

          <span className="sub-text details">
            <Link to={`/singleVideo-page/${id}`} onClick={() => history(obj)}>
              {creatorName}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
export { PlayListCard };
