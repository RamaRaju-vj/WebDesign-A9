// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        email,
        password,
      });

      if (response.data.token) {
        // Save the token to localStorage or a state variable
        setLoginStatus('User logged in');
        onLogin(); // Notify the parent component about successful login
      } else {
        setLoginStatus('Login failed');
      }
    } catch (error) {
      console.error('Login Failed', error.response?.data?.error || 'Unknown error');
      setLoginStatus('User not found or invalid credentials');
    }
  };

  const features = [
    { title: 'Secure Login', description: 'Log in with confidence using our secure authentication system.' },
    { title: 'User Profile', description: 'Manage your profile and preferences after logging in.' },
    { title: 'Personalized Experience', description: 'Enjoy a personalized experience tailored to your needs.' },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header h2">Login</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              </form>
              <p className="mt-3 text-danger">{loginStatus}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
