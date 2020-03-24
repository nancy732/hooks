import React, { useState } from "react";
import "../App.css";
export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();
  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      username,
      password
    };
    setUser(userData);
    setUsername("");
    setPassword("");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>login</h1>
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center"
        }}
      >
        <input
          type="text"
          placeholder="username"
          onChange={event => setUsername(event.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="password"
          onChange={event => setPassword(event.target.value)}
          value={password}
        />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}
