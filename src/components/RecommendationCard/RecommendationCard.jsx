import "./RecomendationCard.css";
import { Link } from "react-router-dom";
function RecommendationCard({ contentPhotoUrl, thumbnail, creatorName,id }) {
  return (
    <div className="reccomendation text">
      <div className="preview">
        <img width="168" alt={thumbnail} src={contentPhotoUrl} />
      </div>

      <div className="info text">
        <Link to={`/singleVideo-page/${id}`}>
          <div className="title">{thumbnail}</div>
        </Link>

        <div className="username">{creatorName}</div>
        <div className="view-info"></div>
      </div>
    </div>
  );
}
export { RecommendationCard };
