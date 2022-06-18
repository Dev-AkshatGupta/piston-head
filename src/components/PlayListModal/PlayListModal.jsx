import "./PlayListModal.css";
import { useState } from "react";
import { useDataValues } from "../../contextAndReducers/DataProvider";
import {
  usePlayListActions,
  usePlayListVideoActions,
} from "../../utilities/CustomHooks";
import { ImCross } from "react-icons/im";
function PlayListModal() {
  const [details, setDetails] = useState({ title: "", description: "" });
  const { state, modalDisplay, setModalDisplay } = useDataValues();
  const videoObj = state.currentPlayingVideo;
  const { addVideoToPlayList, removeVideoFromPlaylist } =
    usePlayListVideoActions();
  const { newPlayList } = usePlayListActions();

  return (
    <div className="modal-for-playlist">
      <div className="playlist-form">
        <div className="flex-center-space-betw padding-l-r ">
          <p className="text"> Save to ...</p>
          <button
            className="btn-icon-sml background-orange "
            onClick={() => setModalDisplay(!modalDisplay)}
          >
            <ImCross />
          </button>
        </div>

        {state.playlistArr.map((item) => {
          return (
            <div className="flex-center margin-bottom-1" key={item._id}>
              <label className="text">
                <input
                  type="checkbox"
                  name="playlistName"
                  id=""
                  checked={item.videos.some((obj) => obj._id === videoObj._id)}
                  onChange={() =>
                    item.videos.some((obj) => obj._id === videoObj._id)
                      ? removeVideoFromPlaylist(videoObj._id, item._id)
                      : addVideoToPlayList(item._id, videoObj)
                  }
                />
                {item.title}
              </label>
            </div>
          );
        })}
        <label htmlFor="title of the PlayList" className="text">
          EnterName of playList
        </label>
        <input
          type="text"
          title="title"
          value={details.title}
          onChange={(e) => setDetails({ ...details, title: e.target.value })}
        />
        <label htmlFor="Description" className="text">
          Description
        </label>
        <input
          type="text"
          title="description"
          value={details.description}
          onChange={(e) =>
            setDetails({ ...details, description: e.target.value })
          }
        />
        <div className="flex-center padding-2R">
          <button
            className="btn btn-outline-success padding-5-10 "
            onClick={() => {
              newPlayList(details.title, details.description);
               setDetails({title:"" ,description: "" });
            }}
          >
            Create PlayList
          </button>
        </div>
      </div>
    </div>
  );
}
export { PlayListModal };
