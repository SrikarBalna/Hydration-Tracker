import React, { useState } from 'react';
import '../styles/profile.css'; // Import your CSS file

const HydrationTracker = () => {
    const [waterIntake, setWaterIntake] = useState('');
    const [goal, setGoal] = useState('');
    const [intakeHistory, setIntakeHistory] = useState([]);

    const handleAddIntake = (e) => {
        e.preventDefault();
        if (waterIntake) {
            setIntakeHistory([...intakeHistory, waterIntake]);
            setWaterIntake('');
        }
    };

    const totalIntake = intakeHistory.reduce((acc, curr) => acc + Number(curr), 0);

    return (
        <div className="root">
            <form className='form' onSubmit={handleAddIntake}>
                <h1 className="logo" style={{ fontSize: '2.5rem', fontWeight: 'bold' ,}}>
                    Hydration Tracker
                </h1>
                <div>
                    <label>Name:</label>
                    <br></br>
                    <input 
                    type="text"
                    placeholder='Enter your name'

                    ></input>
                </div>

                <div>
                    <label>Age:</label>
                    <br></br>
                    <input
                    min={0}
                    type="number"
                    placeholder='Enter your age'
                    ></input>
                </div>

                <div>
                    <label>Gender: </label>
                    <br></br>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>

                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                </div> 

                <div className='height-cointainer'>
                    <label>Height:</label>
                    <br></br>
                    <input
                    min={0}
                    max={300}
                    step={0.1}
                    type="number"
                    placeholder='Enter your height'
                    width={"2rem"}
                    ></input>
                </div>

                <div className='weight-cointer'>
                    <label>Weight:</label>
                    <br></br>
                    <input
                    min={0}
                    max={200}
                    step={0.1}
                    type="number"
                    placeholder='Enter your weight'
                    ></input>
                </div>

                <div className='goal'>
                    <label htmlFor="goal">Daily Water Intake Goal (in liters):</label>
                    <br></br>
                    <input 
                        min={0}
                        type="number"
                        id="goal" 
                        placeholder="Set your daily goal" 
                        value={goal} 
                        onChange={(e) => setGoal(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-lg p-2">Add Intake</button>
            </form>
            <div className='mt-6'>
                <h2 className="font-bold text-black text-xl">Total Water Intake: {totalIntake} L</h2>
                <h2 className="font-bold text-black text-xl">Goal: {goal} L</h2>
                <h3 className="font-bold text-black text-lg">Intake History:</h3>
                <ul className="list-disc pl-5">
                    {intakeHistory.map((intake, index) => (
                        <li key={index}>{intake} L</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HydrationTracker;