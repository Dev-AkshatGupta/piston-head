import { useDataValues } from "../../contextAndReducers/DataProvider";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { DropDownBox } from "./DropDownBox.jsx";
import { useState } from "react";
function NavBar() {
  const { dispatch } = useDataValues();
  const [dropBox, setDropBox] = useState(false);
  return (
    <header className="masthead bg-style">
      {/* <!-- Masthead Logo --> */}

      <div className="logo-container">
        <div
          className="btn-hamburger"
          onClick={() => dispatch({ type: "ASIDE" })}
        >
          <i className="material-icons md-dark md-inactive">menu</i>
        </div>
        <Link to="/">
          <div className="logo text-accent text"></div>
        </Link>
        <Link to="/">
          <div className="text-accent logo-text">Piston-head</div>
        </Link>
      </div>

      {/* <!-- Search --> */}

      <div className="search">
        <input
          className="search-input"
          type="search"
          results="5"
          name="s"
          autoSave="some_unique_value"
        ></input>
        <button className="search-button">
          <i className="material-icons md-18 md-dark">search</i>
        </button>
      </div>

      {/* <!-- Masthead User --> */}

      <div className="user-container position-relative">
        <div className="btn-profile" onClick={() => setDropBox(!dropBox)}></div>

        {dropBox && <DropDownBox />}
      </div>
    </header>
  );
}
export { NavBar };
