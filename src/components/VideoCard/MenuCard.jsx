import "./VideoCard.css";
import { Link } from "react-router-dom";
import { useDataValues } from "../../contextAndReducers/DataProvider";
import { useAuthorization } from "../../contextAndReducers/AuthProvider";
import {
  useWatchLaterActions,
} from "../../utilities/CustomHooks";
import  {RiPlayList2Fill} from "react-icons/ri";
import { BsStopwatch } from "react-icons/bs";
function MenuCard({ obj, setMenu, menu }) {
  const { makeWatchLater, deleteFromWatchLater } = useWatchLaterActions();

  const { state, modalDisplay, setModalDisplay } = useDataValues();
  const { _id: id } = obj;
  const findItemIndex = state.watchLater.findIndex((item) => item._id === id);
  const {
    authState: { token },
  } = useAuthorization();
  return (
    <div className="menu-video-card">
      {token ? (
        <p
          className="menu-card-options"
          onClick={() => {
            setModalDisplay(!modalDisplay);
          }}
        >
          <RiPlayList2Fill />
          <span className="margin-l-1"> Add to playlist</span>
        </p>
      ) : (
        <p className="menu-card-options">
          <Link to="/logIn-page">
            <RiPlayList2Fill />
            <span className="margin-l-1"> Add to playlist</span>
          </Link>
        </p>
      )}
      {findItemIndex === -1 && !token ? (
        <p className="menu-card-options">
          <Link to="/logIn-page">
            <BsStopwatch />
            <span className="margin-l-1">Watch Later</span>
          </Link>
        </p>
      ) : (
        findItemIndex === -1 && (
          <p
            className="menu-card-options"
            onClick={() => {
              makeWatchLater(obj);
              setMenu(!menu);
            }}
          >
            
            <BsStopwatch />
            <span className="margin-l-1">Watch Later</span>
          </p>
        )
      )}
      {findItemIndex > -1 && (
        <p
          className="menu-card-options"
          onClick={() => {
            deleteFromWatchLater(id);
            setMenu(!menu);
          }}
        >
          <i className="material-icons md-dark md-18 padding-l-r">schedule</i>
          Remove watch Later
        </p>
      )}
    </div>
  );
}
export { MenuCard };
