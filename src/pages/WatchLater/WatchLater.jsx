import "./WatchLater.css";
import { useDataValues } from "../../contextAndReducers/DataProvider";
import { VideoCard } from "../../components/VideoCard/VideoCard";

function WatchLater() {
  const { state } = useDataValues();
  return (
    <div>
      <div className="Explore-main">
        {state.watchLater.map((item) => (
          <VideoCard
            key={item._id}
            contentPhoto={item.thumbnail.url}
            contentPhotoAlt={item.thumbnail.altText}
            creatorPhoto={item.creatorLogo.url}
            creatorPhotoAlt={item.creatorLogo.altText}
            thumbNail={item.title}
            creatorName={item.creator}
            id={item._id}
            obj={item}
          />
        ))}
      </div>
    </div>
  );
}
export { WatchLater };
