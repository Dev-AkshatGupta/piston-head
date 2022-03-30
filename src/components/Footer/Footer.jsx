import "./Footer.css";
function Footer() {
  return (
    <footer class="footer bg-style">
      {/* <!-- Button Footer Row --> */}

      <div class="button-footer">
        <a src="">
          <div class="logo"></div>
        </a>
        <button>
          <i class="material-icons md-dark md-18">language</i>
          <span class="footer-btn">
            Language: <strong>English</strong>
          </span>
          <i class="material-icons md-dark md-18">arrow_drop_down</i>
        </button>
        <button>
          <span class="footer-btn">
            Country: <strong>Worldwide</strong>
          </span>
          <i class="material-icons md-dark md-18">arrow_drop_down</i>
        </button>
        <button>
          <span class="footer-btn">
            Restricted Mode: <strong>Off</strong>
          </span>
          <i class="material-icons md-dark md-18">arrow_drop_down</i>
        </button>
        <button>
          <i class="material-icons md-dark md-18">history</i>
          <span>History</span>
        </button>
        <button>
          <i class="material-icons md-dark md-18">help</i>
          <span>Help</span>
        </button>
      </div>

      {/* <!-- Primary Links Footer --> */}

      <ul class="primary-links-footer">
        <li>About</li>
        <li>Press</li>
        <li>Copyright</li>
        <li>Creators</li>
        <li>Advertise</li>
        <li>Developers</li>
        <li>+YouTube</li>
      </ul>

      {/* <!-- Secondary Links Footer --> */}

      <ul class="secondary-links-footer terms">
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
