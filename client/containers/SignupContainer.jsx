import React from "react";

const login = () => {
  window.location.href = "/login";
};

function Signup() {
  return (
    <div className="register-page">
      <div className="title">REGISTER YOUR ACCOUNT</div>
      <form className="register-form" method="POST" action="/register">
        <div className="register-input">
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            type="text"
            id="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="register-input">
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <input
          className="register-submit"
          type="submit"
          id="button"
          value="Create Account"
        />
        <input
          className="register-submit"
          type="submit"
          value="Have an account?"
          action="/register"
          onClick={login}
        />
      </form>
    </div>
  );
}

export default Signup;
