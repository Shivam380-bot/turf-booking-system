import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why-section">
      <h2 className="why-title">Why Choose BookMyTurf?</h2>
      <p className="why-subtitle">
        Everything you need to play, connect and compete — all in one place.
      </p>

      <div className="why-cards">
        <div className="why-card">
          <span className="icon">⚡</span>
          <h3>Instant Booking</h3>
          <p>Book your turf instantly without waiting or calling.</p>
        </div>

        <div className="why-card">
          <span className="icon">🏟️</span>
          <h3>Verified Turfs</h3>
          <p>Play only at trusted and quality sports venues.</p>
        </div>

        <div className="why-card">
          <span className="icon">👥</span>
          <h3>Play With Anyone</h3>
          <p>Join players nearby or create your own team.</p>
        </div>

        <div className="why-card">
          <span className="icon">💳</span>
          <h3>Easy Payments</h3>
          <p>Fast, secure and hassle-free online payments.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
