import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/assets/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Book Your <span>Perfect Turf</span>
        </h1>
        <p>Play. Compete. Win.</p>
      </div>
    </section>
  );
}

export default Hero;
