import "./TurfSection.css";

function TurfCard({ image, name, location }) {
  return (
    <div className="turf-card">
      <div className="turf-img">
        <img src={image} alt={name} />
        <button className="book-btn">Book Now</button>
      </div>

      <div className="turf-info">
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default TurfCard;
