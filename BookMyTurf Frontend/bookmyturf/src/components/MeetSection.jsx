import "./MeetSection.css";

function MeetSection() {
  return (
    <section className="meet-section section-bg">
      <div className="meet-content">
        <h2>Meet Your Pals</h2>
        <p>
          Find players, make teams, and enjoy the game together.
          Connect with sports lovers around you.
        </p>
      </div>

      <div className="meet-image">
        <img
          src="/assets/Meet-players.png"
          alt="Meet Players"
        />
      </div>
    </section>
  );
}

export default MeetSection;
