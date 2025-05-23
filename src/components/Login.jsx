import React from 'react';
import "../styles/LoginPage.css"

const LoginPage = () => {
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
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;