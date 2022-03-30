import "./NavBar.css";
function NavBar() {
  return (
    <header className="masthead bg-style">
      {/* <!-- Masthead Logo --> */}

      <div className="logo-container">
        <div className="btn-hamburger" onClick="toggle()">
          <i className="material-icons md-dark md-inactive">menu</i>
        </div>
        <a href="">
          <div className="logo text-accent text">Piston Head</div>
        </a>
      </div>

      {/* <!-- Search --> */}

      <div className="search">
        <input
          className="search-input"
          type="search"
          results="5"
          name="s"
          autosave="some_unique_value"
        ></input>
        <button className="search-button">
          <i className="material-icons md-18 md-dark">search</i>
        </button>
      </div>

      {/* <!-- Masthead User --> */}

      <div className="user-container">
        <a href="/">
          <i className="material-icons md-dark">notifications_none</i>
        </a>
        <a href="/">
          <div className="btn-profile"></div>
        </a>
      </div>
    </header>
  );
}
export { NavBar };
