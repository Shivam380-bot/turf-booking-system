import "./PresenceSection.css";

function PresenceSection() {
  return (
    <section className="presence-wrapper">
      {/* LEFT IMAGE */}
      <div className="presence-left">
        <img
          src="/assets/india-map.png"
          alt="India Map"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="presence-right">
        <h2>Presence in 160+ Cities Across India</h2>
        <p>
          Join the fastest growing sports community in India.
          Book grounds, find players and experience sports like never before.
        </p>
      </div>
    </section>
  );
}

export default PresenceSection;
