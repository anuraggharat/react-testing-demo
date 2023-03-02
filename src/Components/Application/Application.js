import React from "react";

export default function Application() {
  return (
    <div>
      <h1>Login Form</h1>
      <form>
        <div>
          <label htmlFor="username">Enter your Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="password">Enter your Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button>Login</button>
        <label>
          <input type="checkbox" data-testid='test-checkbox'/>
          Keep Me Signed In.
        </label>
      </form>
    </div>
  );
}
