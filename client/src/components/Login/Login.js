import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:2222/user/login', {
        email,
        password,
      });

      if (response.status === 200) {
        setLoginStatus('User logged in');
        onLogin();
        setIsLoggedIn(true);
        // localStorage.setItem('token', response.data.token);
      } else {
        setLoginStatus('Login failed');
      }
    } catch (error) {
      if (error.response) {
        setLoginStatus('User not found or invalid credentials');
      } else if (error.request) {
        setLoginStatus('Network error');
      } else {
        setLoginStatus('Unknown error occurred');
      }
    }
  };

  return (
    <div className="container mt-5">
      {!isLoggedIn && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Login</h2>
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <button
                      type="button"
                      onClick={handleLogin}
                      className="btn btn-primary btn-block"
                    >
                      Login
                    </button>
                  </div>
                  {loginStatus && <p className="text-danger">{loginStatus}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* You can add more logic here to conditionally render other content after login */}
    </div>
  );
};

export default LoginPage;
