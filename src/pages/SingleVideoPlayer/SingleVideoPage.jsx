import { useDataValues } from "../../contextAndReducers/DataProvider";
import { useState, useEffect } from "react";
import {
  useLikeActions,
  useWatchLaterActions,
} from "../../utilities/CustomHooks";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./SingleVideoPage.css";
import { RecommendationCard } from "../../components/RecommendationCard/RecommendationCard";
import axios from "axios";
import { useAuthorization } from "../../contextAndReducers/AuthProvider";
import { Loader } from "../../components/Loader/Loader";
function SingleVideoPage() {
  const { state } = useDataValues();
  const { likeVideo, disLikeVideo } = useLikeActions();
  const { makeWatchLater, deleteFromWatchLater } = useWatchLaterActions();
  // id of the video object which is playing now
  const { source } = useParams();
  const { authState: token } = useAuthorization();
  const [currentVideo, setCurrentVideo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { video },
        } = await axios.get(`/api/video/${source}`);
        setCurrentVideo(video);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [source]);

  const { creator, creatorLogo, src, title, _id } = currentVideo;
 

  const currentPath = useLocation();
  const findLiked = state.likedVideos.some(
    (item) => item._id === currentVideo._id
  );


  const isWatchLater=state.watchLater.some(item=>item._id===currentVideo._id);
  const similarVideos = state.backUpData.filter(
    (item) =>
      item.categoryName === currentVideo.categoryName &&
      item._id !== currentVideo._id
  );
  const navigate = useNavigate();
  const handleLike = (currentVideo) => {
    token.id
      ? findLiked
        ? disLikeVideo(currentVideo._id)
        : likeVideo(currentVideo)
      : navigate("/logIn-Page", {
          state: { from: currentPath },
          replace: true,
        });
  };
  
  const handleWatchLater = (currentVideo) => {
    token.id
      ? isWatchLater
        ? deleteFromWatchLater(currentVideo._id)
        : makeWatchLater(currentVideo)
      : navigate("/logIn-Page", {
          state: { from: currentPath },
          replace: true,
        });
  };
  return (
    <div className="scroll">
      {/* <!-- Content --> */}
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="content">
          {/* <!-- Main Column --> */}

          <article className="main">
            {/* <!-- Player --> */}

            <section className="player">
              <iframe
                width="560"
                height="315"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </section>

            {/* <!-- Lead --> */}

            <section className="bg-style">
              {/* <!-- Title --> */}

              <h1 className="align-left">{title}</h1>

              {/* <!-- Media Object --> */}

              <div className="media">
                <img
                  className="img-profile media-figure"
                  src={creatorLogo.url}
                  alt={creatorLogo.altText}
                />

                <div className="media-body align-left">
                  <h3>{creator}</h3>

                  <div className="subscribe"></div>
                </div>
              </div>
              <hr />

              {/* <!-- Button Bar --> */}

              <div className="lead-btn-row">
                <div className="lead-social-btn">
                  <a onClick={handleWatchLater.bind(this, currentVideo)}>
                    <i className="material-icons md-dark">add</i>

                    <span className="pointer">
                      {isWatchLater
                        ? "Remove from watchlater"
                        : "Add to watch-later"}
                    </span>
                  </a>
                </div>
                <div className="lead-voting-btn">
                  <a onClick={handleLike.bind(this, currentVideo)}>
                    {!findLiked && (
                      <i className="material-icons md-dark md-18">thumb_up</i>
                    )}

                    {findLiked && (
                      <i className="material-icons md-dark md-18 liked">
                        thumb_up
                      </i>
                    )}
                  </a>
                </div>
              </div>
            </section>

            <section className="comments bg-style"></section>
          </article>

          {/* <!-- Aside --> */}

          <aside className="aside bg-style">
            {/* <!-- Media Objects --> */}

            <div className="next-up-bar">
              <h2 className="align-center">Suggestions</h2>
            </div>

            {similarVideos.length > 0 &&
              similarVideos.map((item) => (
                <RecommendationCard
                  key={item._id}
                  contentPhotoUrl={item.thumbnail.url}
                  thumbnail={item.title}
                  creatorName={item.creator}
                  id={item._id}
                />
              ))}
            {similarVideos.length === 0 && (
              <span className="align-center">There are no suggestions.</span>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
export { SingleVideoPage };
