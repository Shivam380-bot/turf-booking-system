import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section" id="about-section">
      {/* LEFT TEXT */}
      <div className="about-left">
        <h2>About BookMyTurf</h2>

        <p>
          We started BookMyTurf with one simple mission – to make playing sports
          easier, faster, and more accessible for everyone.
        </p>

        <p>
          Whether you're a weekend player or a serious athlete, we help you
          find the perfect turf in just a few clicks.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="about-right">
        <img
          src="/assets/about-illustration.png"
          alt="About BookMyTurf"
        />
      </div>
    </section>
  );
}

export default AboutSection;
