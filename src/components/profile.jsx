import React, { useState } from 'react';
import '../styles/profile.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const HydrationTracker = () => {

    const navigate = useNavigate();

    const [waterIntake, setWaterIntake] = useState('');
    const [goal, setGoal] = useState('');
    const [intakeHistory, setIntakeHistory] = useState([]);

    const handleAddIntake = (e) => {
        e.preventDefault();
        if (goal) {
            setIntakeHistory([...intakeHistory, goal]);
            setGoal('');
            navigate('/home');
        }
    };

    const totalIntake = intakeHistory.reduce((acc, curr) => acc + Number(curr), 0);

    return (
        <div className="root">
            <form className='form' onSubmit={handleAddIntake}>
                <h1 className="logo" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                    Personal Information
                </h1>
                
                <div className='input-group'>
                    <label>Name:</label>
                    <input type="text" placeholder='Enter your name' />

                    <label>Date of Birth:</label>
                    <input required type="date" placeholder='Enter your date of birth' />

                    <label>Age:</label>
                    <input id="age" required min={1} max={120} step={1} type="number" placeholder='Enter your age' className='age' />

                    <label>Gender:</label>
                    <div>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female" />
                        <label htmlFor="female">Female</label>
                    </div>

                    <label htmlFor="height">Height:</label>
                    <input id="height" required min={0} max={300} step={0.1} type="number" placeholder="Enter your height (in centimeters)" className="input-field" />

                    <label>Weight:</label>
                    <input id="weight" required min={0} max={200} step={0.1} type="number" placeholder='Enter your weight (in kilograms)' />
                </div>

                <div className='goal-container'>
                    <label htmlFor="goal">Daily Water Intake Goal (in liters):</label>
                    <input 
                        min={0}
                        required
                        type="number"
                        id="goal" 
                        placeholder="Set your daily goal" 
                        value={goal} 
                        onChange={(e) => setGoal(e.target.value)} 
                    />
                </div>
                <button
                    type="button"
                    className="submit-button"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/homepage');
                    }}
                >
                    Get Started
                </button>
            </form>
        </div>
    );
};

export default HydrationTracker;