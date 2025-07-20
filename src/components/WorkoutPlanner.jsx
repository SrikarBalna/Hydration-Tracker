import React, { useState } from "react";
import "./../styles/wkpl.css";

function WorkoutPlanner() {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutType, setWorkoutType] = useState("strength");
  const [workoutDate, setWorkoutDate] = useState("");
  const [workoutNotes, setWorkoutNotes] = useState("");
  const [currentWorkout, setCurrentWorkout] = useState([]);
  const [exerciseSearch, setExerciseSearch] = useState("");
  const [exercises, setExercises] = useState([]);

  const addWorkout = () => {
    if (workoutName && workoutDate) {
      setCurrentWorkout((prev) => [
        ...prev,
        { name: workoutName, type: workoutType, date: workoutDate, notes: workoutNotes },
      ]);
      resetForm();
    }
  };

  const resetForm = () => {
    setWorkoutName("");
    setWorkoutType("strength");
    setWorkoutDate("");
    setWorkoutNotes("");
  };

  const handleExerciseSearch = (e) => {
    setExerciseSearch(e.target.value);
    // Here you would typically call an API to fetch exercises based on the search term
  };

  return (
    <div className="workout-planner">
      <h2>Workout Planner</h2>
      <div className="workout-form">
        <input
          type="text"
          placeholder="Workout Name"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
        <select value={workoutType} onChange={(e) => setWorkoutType(e.target.value)}>
          <option value="strength">Strength</option>
          <option value="cardio">Cardio</option>
          <option value="hiit">HIIT</option>
          <option value="yoga">Yoga</option>
        </select>
        <input
          type="date"
          value={workoutDate}
          onChange={(e) => setWorkoutDate(e.target.value)}
        />
        <textarea
          placeholder="Notes"
          value={workoutNotes}
          onChange={(e) => setWorkoutNotes(e.target.value)}
        />
        <button onClick={addWorkout}>Add Workout</button>
      </div>

      <div className="exercise-search">
        <input
          type="text"
          placeholder="Search Exercises"
          value={exerciseSearch}
          onChange={handleExerciseSearch}
        />
        <div className="exercise-results">
          {/* Render exercise results here based on the search */}
          {exercises.map((exercise) => (
            <div key={exercise.id} className="exercise-item">
              {exercise.name}
            </div>
          ))}
        </div>
      </div>

      <div className="current-workout">
        <h3>Current Workout Plan</h3>
        {currentWorkout.map((workout, index) => (
          <div key={index} className="workout-item">
            <h4>{workout.name}</h4>
            <p>{workout.type} - {workout.date}</p>
            <p>{workout.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutPlanner;