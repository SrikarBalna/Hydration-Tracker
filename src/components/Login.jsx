import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  


  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   setError('');

  //   // Simulate an API call
  //   try {
  //     // Replace this with your actual login logic
  //     if (email === 'test@example.com' && password === 'password') {
  //       console.log('Login successful');
  //     } else {
  //       throw new Error('Invalid email or password');
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //     setEmail('');
  //     setPassword('');
  //   }
  // };

  // return (
  //   <div>
  //     <h2>Login</h2>
  //     {error && <p style={{ color: 'red' }}>{error}</p>}
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="email">Email:</label>
  //         <input
  //           type="email"
  //           id="email"
  //           value={email}
  //           onChange={handleEmailChange}
  //           required
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="password">Password:</label>
  //         <input
  //           type="password"
  //           id="password"
  //           value={password}
  //           onChange={handlePasswordChange}
  //           required
  //         />
  //       </div>
  //       <button type="submit" disabled={loading}>
  //         {loading ? 'Logging in...' : 'Login'}
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default Login;