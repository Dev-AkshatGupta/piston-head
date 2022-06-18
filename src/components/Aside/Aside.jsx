import { useDataValues } from "../../contextAndReducers/DataProvider";
import "./Aside.css";
import { Link, NavLink } from "react-router-dom";
function Aside() {
  const { state } = useDataValues();
  // <!-- Navigation Drawer -->
  return (
    <div id="nav-drawer" className={`bg-style ${state.aside ? `hide` : null}`}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "nav-drawer-items-padding active-aside-link"
            : "nav-drawer-items-padding"
        }
        to="/"
      >
        <i className="material-icons md-dark md-18 padding-l-r">home</i>
        <span>Home</span>
      </NavLink>
      <a href="/" className="nav-drawer-items-padding">
        <i className="material-icons md-dark md-18 padding-l-r">
          play_circle_filled
        </i>
        <span>Subscriptions</span>
      </a>
      <NavLink
        to="/history-page"
        className={({ isActive }) =>
          isActive
            ? "nav-drawer-items-padding active-aside-link"
            : "nav-drawer-items-padding"
        }
      >
        <i className="material-icons md-dark md-18 padding-l-r">history</i>
        <span>History</span>
      </NavLink>
      <NavLink
        to="/watchLater-page"
        className={({ isActive }) =>
          isActive
            ? "nav-drawer-items-padding active-aside-link"
            : "nav-drawer-items-padding"
        }
      >
        <i className="material-icons md-dark md-18 padding-l-r">schedule</i>
        <span>Watch Later</span>
      </NavLink>
      <h5>PLAYLISTS</h5>
      {state.playlistArr.map((item) => {
        return (
          <NavLink key={item._id}
            to={`/playlist-page/${item._id}`}
            className={({ isActive }) =>
              isActive
                ? "nav-drawer-items-padding active-aside-link"
                : "nav-drawer-items-padding"
            }
          >
            <i className="material-icons md-dark md-18 padding-l-r">list</i>
            <span>{item.title}</span>
          </NavLink>
        );
      })}

      {/* <span className="btn-flat">Show more</span> */}
    </div>
  );
}
export { Aside };
