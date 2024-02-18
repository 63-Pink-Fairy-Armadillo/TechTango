import React from "react";

const login = () => {
  window.location.href = "/";
};

function SignupContainer() {
  return (
    <div className="container-signup">
      <section className="title-signup">
        <span className="first">Sign</span>
        <span className="slide">
          <span className="second">Up</span>
        </span>
      </section>
      <form className="register-form" method="POST" action="/signUp">
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
        <div className="bio-input">
          <label htmlFor="bio">About Yourself: </label>
          <textarea
            name="bio"
            id="bio"
            placeholder="Brief Introduction about you"
            rows="3"
          />
        </div>
        <input
          className="register-submit"
          type="submit"
          id="button"
          value="Create Account"
        />
      </form>
      <section className="register">
        <input
          className="login-back"
          type="submit"
          value="Have an account?"
          action="/signUp"
          onClick={login}
        />
      </section>
    </div>
  );
}

export default SignupContainer;