import React,{useState} from 'react';
import "../styles/LoginPage.css"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <h2 className="login-title">Login</h2>
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
        <button type="submit" className="login-button" onClick={async () => {
          try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Login successful:", user);
            alert("Login successful!");
            navigate('/profile');
          } catch (error) {
            console.error("Login error:", error.message);
            alert(error.message);
          }
        }}>Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;