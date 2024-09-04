import React, { useState } from "react";
import "./stylesLogin.css";

export default function LoginPage() {
  const [status, SetStatus] = useState();

  return (
    <>
    <div class="container">
    <h2 class="title">Welcome</h2>
    <p class="subtitle">Sign in to your account</p>
    <form method="POST" action="#" class="form">
      <div class="input-container">
        <input
          placeholder="john@example.com"
          class="input"
          required=""
          id="email"
          name="email"
          type="email"
        />
        <label class="label" for="email">Email address</label>
      </div>
      <div class="input-container">
        <input
          placeholder="Password"
          class="input"
          required=""
          id="password"
          name="password"
          type="password"
        />
        <label class="label" for="password">Password</label>
      </div>
      <div class="actions">
        <label class="remember-me">
          <input
            class="checkbox"
            type="checkbox"
          />
          <span class="checkbox-label">Remember me</span>
        </label>
        <a class="forgot-password" href="#">Forgot your password?</a>
      </div>
      <button class="submit-button" type="submit">Sign In</button>
    </form>
    <div class="sign-up-prompt">
      Don't have an account?
      <a class="sign-up-link" href="#">Sign up</a>
    </div>
  </div>
    </>
  );
}
