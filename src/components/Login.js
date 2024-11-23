import React, { useState } from "react";
import "../styles/Login.css"; 

const Login = ({ setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (!username || !role) {
      alert("Please enter a username and select a role.");
      return;
    }
    setCurrentUser({ username, role });
  };

  return (
    <div className="login-container">
      {/* Background Circles */}
      <div className="circle-container">
        <div className="circle circle-left"></div>
        <div className="circle circle-right"></div>
      </div>

      {/* Form */}
      <div className="login-form">
        <h3 className="form-title">Enter Details</h3>

        <div>
          <label className="input-label">Username</label>
          <input
            type="text"
            placeholder="Type your name please!"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </div>

        <div>
          <label className="input-label">Select Role</label>
          <div className="role-options">
            <label className="role-label">
              <input
                type="radio"
                name="role"
                value="Teacher"
                onChange={(e) => setRole(e.target.value)}
              />
              Teacher
            </label>
            <label className="role-label">
              <input
                type="radio"
                name="role"
                value="Student"
                onChange={(e) => setRole(e.target.value)}
              />
              Student
            </label>
          </div>
        </div>

        <button className="login-button" onClick={handleLogin}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Login;
