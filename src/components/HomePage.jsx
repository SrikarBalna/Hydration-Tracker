import React, { useState } from "react";
import "./../styles/home.css";
// import WorkoutPlanner from "./WorkoutPlanner"; // Import the WorkoutPlanner component
import Footer from "./Footer";

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
      <div className="container">
        <div className="glass" aria-label="glass of water" role="img">
          <div
            className="water"
            style={{ height: `${waterLevel}%`, transition: "height 0.3s ease" }}
          />
        </div>
        <div className="glasses-count" aria-live="polite">
          Glasses consumed: {glassesCount}
        </div>
        <button onClick={addWater} aria-label="Add water to glass">
          Add Water
        </button>
        <button onClick={resetWater} aria-label="Reset water count" className="reset">
          Reset
        </button>
        <p>Water Still Needed: {waterNeeded > 0 ? waterNeeded : 0} glasses</p>
      </div>

      {/* <WorkoutPlanner /> */}
      <Footer />
    </>
  );
}

export default HomePage;
