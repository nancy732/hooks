import React, { useState } from "react";
import "../App.css";
const initialFormState = {
  username: "",
  email: "",
  password: ""
};
export default function Register() {
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState(null);
  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    setUser(form);
    setForm(initialFormState);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Register</h1>
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
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={form.email}
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}
