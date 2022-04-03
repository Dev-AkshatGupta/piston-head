import { useDataValues } from "../../contextAndReducers/DataProvider";
import {
  useLikeActions,
  useWatchLaterActions,
} from "../../utilities/CustomHooks";
import { useParams } from "react-router-dom";
import "./SingleVideoPage.css";
// import { RecommendationCard } from "../VideoSmallCard/HorizontalCard";
function SingleVideoPage() {
  const { state } = useDataValues();
  const { likeVideo, disLikeVideo } = useLikeActions();
  const { makeWatchLater, deleteFromWatchLater } = useWatchLaterActions();
  // id of the object which is playing now
  const { source } = useParams();
  console.log(source);
  const currentVideo =
    state.data[state.data.findIndex((item) => item._id === source)];
  const { creator, creatorLogo, src, title, _id: id } = currentVideo;

  const findLiked = state.likedVideos.findIndex((item) => item._id === id);
  const findWatchLaterIndex = state.watchLater.findIndex(
    (item) => item._id === id
  );

  // const findWatchLaterIndex = -1;
  return (
    <div className="scroll">
      {/* <!-- Content --> */}

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
                <a>
                  <i className="material-icons md-dark">add</i>
                  {findWatchLaterIndex === -1 && (
                    <span
                      className="pointer"
                      onClick={() => makeWatchLater(currentVideo)}
                    >
                      Add to watch-later
                    </span>
                  )}
                  {findWatchLaterIndex > -1 && (
                    <span
                      className="pointer"
                      onClick={() => deleteFromWatchLater(id)}
                    >
                      Remove from watchLater
                    </span>
                  )}
                </a>
                <a href="">
                  <i className="material-icons md-dark md-18">share</i>
                  <span>Share</span>
                </a>
                <a>
                  <i className="material-icons md-dark">more_horiz</i>
                  <span>More</span>
                </a>
              </div>
              <div className="lead-voting-btn">
                <a
                  onClick={() => {
                    likeVideo(currentVideo);
                  }}
                >
                  {findLiked === -1 && (
                    <i className="material-icons md-dark md-18">thumb_up</i>
                  )}
                  {findLiked > -1 && (
                    <i className="material-icons md-dark md-18 liked">
                      thumb_up
                    </i>
                  )}
                </a>
                <a
                  onClick={() => {
                    disLikeVideo(id);
                  }}
                >
                  {findLiked > -1 && (
                    <i className="material-icons md-dark md-18">thumb_down</i>
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
            <h5 className="align-left">Up next</h5>
            <h5>Autoplay</h5>
            <i className="material-icons md-18 md-dark">info</i>

            <div className="switch-container">
              <div className="switch-bar"></div>
              <div className="switch-circle"></div>
            </div>
          </div>

          {/* <RecommendationCard />
          <RecommendationCard />
          <RecommendationCard />
          <RecommendationCard /> */}
        </aside>
      </div>
    </div>
  );
}
export { SingleVideoPage };
