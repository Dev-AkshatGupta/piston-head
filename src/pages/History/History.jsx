import "./History.css";
import { useDataValues } from "../../contextAndReducers/DataProvider";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useVideoHistory } from "../../utilities/CustomHooks";
import { ImBin2 } from "react-icons/im";
import { Chips } from "../../components/Chips/Chips";
function History() {
  const { state } = useDataValues();
  const { deleteHistory, deleteAllHistory } = useVideoHistory();
  return (
    <div>
      <div className="button-area">
        <button
          className="btn btn-outline-error"
          onClick={() => {
            deleteAllHistory();
          }}
        >
          Delete All History
        </button>
      </div>
      <div className="Explore-main">
        {state.historyList.map((item) => (
          <div>
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
            <button
              className="btn btn-sec"
              onClick={() => deleteHistory(item._id)}
            >
              <ImBin2 /> Delete from History
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export { History };
