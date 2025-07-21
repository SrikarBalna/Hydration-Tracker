import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import ExerciseCard from '../components/ExerciseCard';
// import WorkoutBuilder from '../components/WorkoutBuilder';
// import { useWorkouts } from '../hooks/useWorkouts';
import '../styles/wkpl.css';

const WorkoutDashboard = () => {
  const {
    workouts,
    exercises,
    loading,
    error,
    loadExercises,
    searchExercises,
    createWorkout,
    deleteWorkout,
  } = useWorkouts();

  const [selectedTab, setSelectedTab] = useState('exercises');
  const [selectedMuscle, setSelectedMuscle] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [showWorkoutBuilder, setShowWorkoutBuilder] = useState(false);

  const muscleGroups = ['all', 'chest', 'back', 'shoulders', 'legs', 'abs'];

  useEffect(() => {
    if (selectedMuscle !== 'all') loadExercises(selectedMuscle);
    else loadExercises();
  }, [selectedMuscle]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) searchExercises(searchQuery);
    else loadExercises(selectedMuscle !== 'all' ? selectedMuscle : undefined);
  };

  const handleExerciseSelect = (exercise) => {
    if (selectedExercises.find((ex) => ex.id === exercise.id)) {
      setSelectedExercises((prev) => prev.filter((ex) => ex.id !== exercise.id));
    } else {
      setSelectedExercises((prev) => [...prev, exercise]);
    }
  };

  const handleCreateWorkout = () => {
    if (selectedExercises.length > 0) setShowWorkoutBuilder(true);
  };

  const handleSaveWorkout = (name, description, exercises) => {
    createWorkout(name, description, exercises);
    setSelectedExercises([]);
    setShowWorkoutBuilder(false);
  };

  const handleStartWorkout = (workout) => {
    alert(`Starting workout: ${workout.name}`);
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="dashboard-title">
            <Dumbbell className="dashboard-icon" />
            <h1>Workout Dashboard</h1>
            <p>Plan your workouts and track your progress</p>
          </div>
          {selectedExercises.length > 0 && (
            <button className="create-workout-button" onClick={handleCreateWorkout}>
              <Plus /> Create Workout ({selectedExercises.length})
            </button>
          )}
        </header>

        <nav className="dashboard-tabs">
          <button
            className={selectedTab === 'exercises' ? 'active-tab' : ''}
            onClick={() => setSelectedTab('exercises')}
          >
            Exercise Library
          </button>
          <button
            className={selectedTab === 'workouts' ? 'active-tab' : ''}
            onClick={() => setSelectedTab('workouts')}
          >
            My Workouts ({workouts.length})
          </button>
        </nav>

        <div className="dashboard-content">
          {selectedTab === 'exercises' ? (
            <>
              <form className="search-bar" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search exercises..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="search-icon" />
                <Filter className="filter-icon" />
                <select
                  value={selectedMuscle}
                  onChange={(e) => setSelectedMuscle(e.target.value)}
                >
                  {muscleGroups.map((muscle) => (
                    <option key={muscle} value={muscle}>
                      {muscle === 'all' ? 'All Muscles' : muscle.charAt(0).toUpperCase() + muscle.slice(1)}
                    </option>
                  ))}
                </select>
              </form>

              {loading && <div className="loading">Loading exercises...</div>}
              {error && <div className="error">{error}</div>}

              {!loading && !error && (
                <div className="exercise-grid">
                  {exercises.length === 0 ? (
                    <div className="empty-state">No exercises found</div>
                  ) : (
                    exercises.map((exercise) => (
                      <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                        onSelect={handleExerciseSelect}
                        isSelected={selectedExercises.some((ex) => ex.id === exercise.id)}
                      />
                    ))
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="workout-grid">
              {workouts.length === 0 ? (
                <div className="empty-state">No workouts yet</div>
              ) : (
                workouts.map((workout) => (
                  <div key={workout.id} className="workout-card">
                    <div className="card-header">
                      <div>
                        <h3>{workout.name}</h3>
                        <p>{workout.description}</p>
                      </div>
                      <button onClick={() => deleteWorkout(workout.id)}>
                        <Trash2 />
                      </button>
                    </div>
                    <div className="card-details">
                      <Calendar /> {workout.exercises.length} exercises
                    </div>
                    <div className="exercise-list">
                      {workout.exercises.slice(0, 3).map((ex, idx) => (
                        <div key={idx}>{ex.exercise.name} - {ex.sets}x{ex.reps}</div>
                      ))}
                      {workout.exercises.length > 3 && (
                        <div className="more-exercises">+{workout.exercises.length - 3} more exercises</div>
                      )}
                    </div>
                    <button onClick={() => handleStartWorkout(workout)} className="start-workout">
                      <Play /> Start Workout
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {showWorkoutBuilder && (
          <WorkoutBuilder
            selectedExercises={selectedExercises}
            onSaveWorkout={handleSaveWorkout}
            onClose={() => setShowWorkoutBuilder(false)}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WorkoutDashboard;
