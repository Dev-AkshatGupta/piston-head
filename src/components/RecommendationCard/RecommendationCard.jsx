import "./RecommendationCard.css";
function RecommendationCard() {
  return (
    <div className="reccomendation text">
      <div className="preview">
        <img
          width="168"
          alt="thumbnail"
          src="https://i.ytimg.com/vi/1_HkEMasarg/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCLjF1uWnDFoXDvCos4UuKnS8e6PA"
        />
        <div className="timestamp">1:33:48</div>
      </div>

      <div className="info text">
        <div className="title">Red Hot Chili Peppers Live Reading festival</div>

        <div className="username">mike</div>
        <div className="view-info">
          <div>6.5M views</div>
          <div>*</div>
          <div>4 Years Ago</div>
        </div>
      </div>
    </div>
  );
}
export { RecommendationCard };
