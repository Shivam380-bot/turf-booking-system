import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTurfs } from "../services/turfService";
import "./TurfList.css";

function TurfList() {
  const [turfs, setTurfs] = useState([]);

  useEffect(() => {
    getAllTurfs()
      .then(data => setTurfs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="turf-page">
      <h2 className="title">All Available Turfs</h2>

      <div className="turf-grid">
        {turfs.map((turf) => (
          <Link to={`/turf/${turf.id}`} key={turf.id} className="turf-card">
            <img src={turf.imageUrl} alt={turf.name} />
            <h3>{turf.name}</h3>
            <p>{turf.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TurfList;
