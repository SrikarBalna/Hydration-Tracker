import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase"; // make sure you have this file set up
import { useState } from 'react';
import "../styles/Signup.css"
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <h2 className="login-title">Signup</h2>
        <div className='input-group'>
          <label className='mailin' htmlFor="text">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
            autoComplete="name"
          />
        </div>
        <div className="input-group">
          <label className='mailin' htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            required
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className='pass' htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="login-button"
          onClick={async (e) => {
            e.preventDefault();
            try {
              const userCredential = await createUserWithEmailAndPassword(auth, email, password);
              const user = userCredential.user;
              console.log("Signup successful:", user);
              alert("Signup successful!");
              navigate('/profile')

            } catch (error) {
              console.error("Error signing up:", error.message);
              alert(error.message);
            }
          }}
        >Signup</button>
      </form>
    </div>
  );
};

export default Signup;