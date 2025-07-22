import React, { useState } from 'react';
import '../styles/home.css';
import Navbar from '../components/Navbar';

const Home = () => {
  const dailyGoal = 2000;
  const [currentIntake, setCurrentIntake] = useState(0);
  const [entries, setEntries] = useState([]);
  const [customAmount, setCustomAmount] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const progressPercentage = Math.min((currentIntake / dailyGoal) * 100, 100);

  const addEntry = (amount) => {
    const newEntry = {
      id: Date.now(),
      amount,
      timestamp: new Date(),
    };
    setEntries([...entries, newEntry]);
    setCurrentIntake(currentIntake + amount);
  };

  const handleCustomAdd = () => {
    const amount = parseInt(customAmount);
    if (amount > 0) {
      addEntry(amount);
      setCustomAmount('');
      setShowCustomInput(false);
    }
  };

  const getProgressColor = () => {
    if (progressPercentage >= 100) return 'green';
    if (progressPercentage >= 75) return 'blue';
    if (progressPercentage >= 50) return 'yellow';
    return 'red';
  };

  const getEncouragement = () => {
    if (progressPercentage >= 100) return "Great job! You've reached your daily goal! 🎉";
    if (progressPercentage >= 75) return "Almost there! Keep up the good work! 💪";
    if (progressPercentage >= 50) return "You're halfway there! Stay hydrated! 💧";
    return "Time to hydrate! Your body needs water! 🚰";
  };

  return (
    <>
      <Navbar />
      <div className='outer-container'>
        <div className="tracker-container">
          <div className="header">
            <h2><span className="icon">💧</span> Hydration Tracker</h2>
          </div>

          {/* Progress Circle */}
          <div className="progress-circle">
            <div className="circle">
              <div className="progress-info">
                <div className={`progress-percentage ${getProgressColor()}`}>
                  {Math.round(progressPercentage)}%
                </div>
                <div className="intake-info">{currentIntake}ml / {dailyGoal}ml</div>
              </div>
            </div>
          </div>

          {/* Encouragement */}
          <div className="encouragement">{getEncouragement()}</div>

          {/* Quick Add */}
          <div className="quick-add">
            <h3>Quick Add</h3>
            <div className="quick-buttons">
              {[250, 500, 750, 1000].map(amount => (
                <button key={amount} onClick={() => addEntry(amount)}>{amount}ml</button>
              ))}
            </div>

            {showCustomInput ? (
              <div className="custom-input-section">
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount (ml)"
                />
                <button onClick={handleCustomAdd}>Add</button>
                <button onClick={() => setShowCustomInput(false)}>Cancel</button>
              </div>
            ) : (
              <button className="custom-button" onClick={() => setShowCustomInput(true)}>+ Custom Amount</button>
            )}
          </div>

          {/* Entries */}
          <div className="entries">
            <h3>Today's Entries ({entries.length})</h3>
            <div className="entries-list">
              {entries.length === 0 ? (
                <p className="no-entries">No entries yet. Start tracking your hydration!</p>
              ) : (
                <>
                  {entries.slice(-5).reverse().map(entry => (
                    <div className="entry" key={entry.id}>
                      <span>{entry.amount}ml</span>
                      <span>
                        {new Date(entry.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  ))}
                  {entries.length > 5 && (
                    <p className="more-entries">+{entries.length - 5} more entries</p>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="stats">
            <div>
              <div className="stat-value">{dailyGoal}ml</div>
              <div className="stat-label">Daily Goal</div>
            </div>
            <div>
              <div className="stat-value">{Math.max(0, dailyGoal - currentIntake)}ml</div>
              <div className="stat-label">Remaining</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
