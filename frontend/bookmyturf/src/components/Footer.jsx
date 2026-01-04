import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h2>BookMyTurf</h2>
          <p>
            Book sports turfs instantly and enjoy the game with your friends.
            Easy, fast & reliable.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Book Turf</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>📍 Indore, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ support@bookmyturf.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} BookMyTurf. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
