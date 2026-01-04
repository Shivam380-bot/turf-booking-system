import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TurfSection.css";
import { getAllTurfs } from "../services/turfService";

function TurfSection() {
  const [turfs, setTurfs] = useState([]);

  useEffect(() => {
    getAllTurfs()
      .then((data) => setTurfs(data))
      .catch((err) => console.error("Failed to fetch turfs", err));
  }, []);

  return (
    <section className="turf-section">
      <h2 className="section-title">Available Turfs</h2>

      <div className="turf-grid">
        {turfs.slice(0, 4).map((turf) => (
          <Link
            to={`/turf/${turf.id}`}
            key={turf.id}
            className="turf-card"
          >
            <img
              src={turf.imageUrl}
              alt={turf.name}
              className="turf-image"
            />
            <h3>{turf.name}</h3>
            <p>{turf.city}</p>
          </Link>
        ))}
      </div>

      <div className="view-all-wrapper">
        <Link to="/turfs" className="view-all-btn">
          View All
        </Link>
      </div>
    </section>
  );
}

export default TurfSection;
