import "./SingleVideoPage.css";
// import { RecommendationCard } from "../VideoSmallCard/HorizontalCard";
function SingleVideoPage() {
  return (
    <div class="scroll">
      {/* <!-- Content --> */}

      <div class="content">
        {/* <!-- Main Column --> */}

        <article class="main">
          {/* <!-- Player --> */}

          <section class="player">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gYs_jYUyaoY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </section>

          {/* <!-- Lead --> */}

          <section class="bg-style">
            {/* <!-- Title --> */}

            <h1 className="align-left">
              Contributing to Open Source Part I: The Easy Way
            </h1>

            {/* <!-- Media Object --> */}

            <div class="media">
              <img
                class="img-profile media-figure"
                src="https://yt3.ggpht.com/-UbUyULJMBoM/AAAAAAAAAAI/AAAAAAAAAAA/LGD8KPvBEdc/s88-c-k-no/photo.jpg"
                alt=""
              />

              <div class="media-body align-left">
                <h3>The Odin Project</h3>

                <div class="subscribe"></div>
              </div>
            </div>
            <hr />

            {/* <!-- Button Bar --> */}

            <div class="lead-btn-row">
              <div class="lead-social-btn">
                <a href="">
                  <i class="material-icons md-dark">add</i>
                  <span>Add to watchlater</span>
                </a>
                <a href="">
                  <i class="material-icons md-dark md-18">share</i>
                  <span>Share</span>
                </a>
                <a>
                  <i class="material-icons md-dark">more_horiz</i>
                  <span>More</span>
                </a>
              </div>
              <div class="lead-voting-btn">
                <a href="">
                  <i class="material-icons md-dark md-18">thumb_up</i>
                  <span>42</span>
                </a>
                <a>
                  <i class="material-icons md-dark md-18">thumb_down</i>
                  <span>0</span>
                </a>
              </div>
            </div>
          </section>

          <section class="comments bg-style"></section>
        </article>

        {/* <!-- Aside --> */}

        <aside class="aside bg-style">
          {/* <!-- Media Objects --> */}

          <div class="next-up-bar">
            <h5 className="align-left">Up next</h5>
            <h5>Autoplay</h5>
            <i class="material-icons md-18 md-dark">info</i>

            <div class="switch-container">
              <div class="switch-bar"></div>
              <div class="switch-circle"></div>
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
