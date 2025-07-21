import { useState } from "react";
import "./../styles/home.css";
import WorkoutDashboard from "./WorkoutDashboard";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
function HomePage() {
  const [waterLevel, setWaterLevel] = useState(0);

  const addWater = () => {
    setWaterLevel((prev) => (prev >= 100 ? 100 : prev + 10));
  };

  const resetWater = () => {
    setWaterLevel(0);
  };

  const glassesCount = Math.floor(waterLevel / 10);
  const waterNeeded = 10 - glassesCount;

  return (
    <>
      <Navbar />
      <div className="outer-container">
        <div className="container">
          <h1>Welcome to Hydro Tracker</h1>
          <p>Your ultimate solution for tracking water consumption and staying hydrated.</p>
        </div>
        <div className="first_container">
          <div className="glass" aria-label="glass of water" role="img">
            <div
              className="water"
              style={{ height: `${waterLevel}%`, transition: "height 0.3s ease" }}
            />
          </div>
          <div className="glasses-count" aria-live="polite">
            Glasses consumed: {glassesCount}
          </div>
          <div className="buttons-container">
            <button onClick={addWater} aria-label="Add water to glass">
              Add Water
            </button>
            <button onClick={resetWater} aria-label="Reset water count" className="reset">
              Reset
            </button>
          </div>
          <p>Water Still Needed: {waterNeeded > 0 ? waterNeeded : 0} glasses</p>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
