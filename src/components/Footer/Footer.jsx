import "./Footer.css";
function Footer() {
  return (
    <footer className="footer bg-style">
      {/* <!-- Button Footer Row --> */}

      <div className="button-footer">
        <a src="">
          <div className="logo"></div>
        </a>
        <button>
          <i className="material-icons md-dark md-18">language</i>
          <span className="footer-btn">
            Language: <strong>English</strong>
          </span>
          <i className="material-icons md-dark md-18">arrow_drop_down</i>
        </button>
        <button>
          <span className="footer-btn">
            Country: <strong>Worldwide</strong>
          </span>
          <i className="material-icons md-dark md-18">arrow_drop_down</i>
        </button>
        <button>
          <span className="footer-btn">
            Restricted Mode: <strong>Off</strong>
          </span>
          <i className="material-icons md-dark md-18">arrow_drop_down</i>
        </button>
        <button>
          <i className="material-icons md-dark md-18">history</i>
          <span>History</span>
        </button>
        <button>
          <i className="material-icons md-dark md-18">help</i>
          <span>Help</span>
        </button>
      </div>

      {/* <!-- Primary Links Footer --> */}

      <ul className="primary-links-footer">
        <li>About</li>
        <li>Press</li>
        <li>Copyright</li>
        <li>Creators</li>
        <li>Advertise</li>
        <li>Developers</li>
        <li>+Piston-Head</li>
      </ul>

      {/* <!-- Secondary Links Footer --> */}

      <ul className="secondary-links-footer terms">
        <li>Terms</li>
        <li>Privacy</li>
        <li>Policy & Safety</li>
        <li>Send feedback</li>
        <li>Try something new!</li>
      </ul>
    </footer>
  );
}
export { Footer };
