import "./PlayListPage.css";
import { useParams } from "react-router-dom";
import { usePlayListActions } from "../../utilities/CustomHooks";
import { useDataValues } from "../../contextAndReducers/DataProvider";
import { PlayListCard } from "../../components/PlayListCard/PlayListCard";
import { useNavigate } from "react-router-dom";
function PlayListPage() {
  const { id } = useParams();
  const { state } = useDataValues();
  const currentPlaylistIndex = state.playlistArr.findIndex(
    (item) => item._id === id
  );
  const navigate = useNavigate();
  const currentPlayList = state.playlistArr[currentPlaylistIndex];
  console.log(currentPlayList);
  const { deletePlayList } = usePlayListActions();
  return (
    // item extracted out of this is basically a object which contains a different way of the id and stuff of the
    <div className="">
      <div className="button-area">
        <button
          className="btn btn-outline-error"
          onClick={() => {
            deletePlayList(id);
            navigate("/");
          }}
        >
          Delete Play List
        </button>
      </div>
      <div className="playListPage-main">
        {currentPlayList.videos.map((item) => (
          <PlayListCard
            key={item._id}
            contentPhoto={item.thumbnail.url}
            contentPhotoAlt={item.thumbnail.altText}
            creatorPhoto={item.creatorLogo.url}
            creatorPhotoAlt={item.creatorLogo.altText}
            thumbNail={item.title}
            creatorName={item.creator}
            id={item._id}
            obj={item}
            playlistId={id}
          />
        ))}
      </div>
    </div>
  );
}
export { PlayListPage };
