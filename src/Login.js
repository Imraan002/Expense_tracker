import './Login.css';

import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Hardcoded fake user credentials
    const fakeUserCredentials = {
      employee: { email: 'employee@example.com', password: 'employee123' },
      admin: { email: 'admin@example.com', password: 'admin123' },
    };

    // Perform client-side validation
    if (email && password) {
      // Check against the hardcoded fake data
      if (email === fakeUserCredentials.employee.email && password === fakeUserCredentials.employee.password) {
        onLogin('employee');
      } else if (email === fakeUserCredentials.admin.email && password === fakeUserCredentials.admin.password) {
        onLogin('admin');
      } else {
        alert('Invalid email or password.');
      }
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="container">
      <h1 className="header">EXPENSE TRACKER</h1>
      <form>
        <label>Email:</label>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
