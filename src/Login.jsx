import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const authObject = { 'Project-ID': "6b48e449-56fb-4473-bd4f-1383d2bcb003", 'User-Name': user, 'User-Secret': password}
    try {
        axios.get('https://api.chatengine.io/chats', {headers: authObject});
        localStorage.setItem('username',user);
        localStorage.setItem('password',password);
        window.location.reload();
    } catch (error) {
        setErr('Oops, incorrect credentials')
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
                <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error" style={{color:'red'}}>{err}</h2>
        </form>
      </div>
    </div>
  );
};

export default Login;
