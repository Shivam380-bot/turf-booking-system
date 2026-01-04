import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${showNavbar ? "show" : ""}`}>
        {/* LEFT */}
        <div className="logo-container">
          {/* ✅ PUBLIC ASSET */}
          <img
            src="/assets/grassLogo.png"
            className="logo-img"
            alt="BookMyTurf Logo"
          />
          <h1 className="logo-text">
            Book<span>My</span>Turf
          </h1>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <Link to="/turfs" className="book-btn">
            <span className="btn-icon">🏃‍♂️</span>
            <span className="btn-text">Book Your Spot</span>
          </Link>

          <div className="menu-icon" onClick={() => setMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* SIDE MENU */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </div>

        <ul className="nav-links">
          <li
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
          >
            Home
          </li>

          <li
            onClick={() => {
              document
                .getElementById("about-section")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            About
          </li>

          <li
            onClick={() => {
              setShowLogin(true);
              setMenuOpen(false);
            }}
          >
            Login
          </li>

          <li
            onClick={() => {
              setShowSignup(true);
              setMenuOpen(false);
            }}
          >
            Sign Up
          </li>

          <li
            onClick={() => {
              navigate("/turfs");
              setMenuOpen(false);
            }}
          >
            <span className="book-btn">Book Now</span>
          </li>
        </ul>
      </div>

      {/* LOGIN POPUP */}
      {showLogin && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Login</h2>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button
              className="login-btn"
              onClick={() => setShowLogin(false)}
            >
              Login
            </button>

            <p
              className="switch-link"
              onClick={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
            >
              Don&apos;t have an account? Sign Up
            </p>

            <span
              className="close-btn"
              onClick={() => setShowLogin(false)}
            >
              ✕
            </span>
          </div>
        </div>
      )}

      {/* SIGNUP POPUP */}
      {showSignup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Sign Up</h2>

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button className="login-btn">Create Account</button>

            <p
              className="switch-link"
              onClick={() => {
                setShowSignup(false);
                setShowLogin(true);
              }}
            >
              Already have account? Login
            </p>

            <span
              className="close-btn"
              onClick={() => setShowSignup(false)}
            >
              ✕
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
