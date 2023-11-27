// SignUp.js

import React, { useState } from "react";
import styles from "../styles/SignUp.module.css";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Sign() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.SignUpContainer}>
        <div className={styles.SignUpForm}>
          <h1 className={styles.heading}>Sign Up</h1>
          <p className={styles.signup_p}>Please create your account</p>

          <form className={styles.SignUpForm1}>
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter Username" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Password"
              />
              <div
                className={styles.togglePasswordIcon}
                onClick={handleTogglePassword}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </div>
            </div>

            <Link to="/">
              <button type="submit" className={styles.Signup_button}>
                Sign Up
              </button>
            </Link>

            <p className={styles.signinLink}>
              Already have an account? <Link to="/">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
