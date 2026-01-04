import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTurfById } from "../services/turfService";
import "./TurfDetail.css";

function TurfDetail() {
  const { id } = useParams();
  const [turf, setTurf] = useState(null);

  useEffect(() => {
    getTurfById(id)
      .then(data => setTurf(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!turf) return <h2>Loading...</h2>;

  return (
    <div className="turf-detail-container">
      <div className="turf-detail-card">

        <div className="turf-image-section">
          <img src={turf.imageUrl} alt={turf.name} />
        </div>

        <div className="turf-info-section">
          <h1>{turf.name}</h1>
          <p className="location">{turf.location}</p>

          <div className="info-box">
            <h3>About</h3>
            <p>{turf.description}</p>
          </div>

          <div className="info-box">
            <h3>Timings</h3>
            <p>{turf.timings}</p>
          </div>

          <div className="info-box">
            <h3>Price</h3>
            <p>₹{turf.price} </p>
          </div>

          <button className="book-btn">Book Now</button>
        </div>

      </div>
    </div>
  );
}

export default TurfDetail;
