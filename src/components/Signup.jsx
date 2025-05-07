import React from 'react';
import "../styles/Signup.css"

const LoginPage = () => {
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <h2 className="login-title">Signup</h2>
        <div className="input-group">
          <label className='mailin' htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            required
            autoComplete="username"
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
          />
        </div>
        <button type="submit" className="login-button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;