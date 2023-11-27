// SignIn.js

import { React, useState } from "react";
import styles from "../styles/SignIn.module.css";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.SignInContainer}>
        <div className={styles.SignInForm}>
          <h1 className={styles.heading}>Sign In</h1>
          <p>Please enter your Company network credentials</p>

          <form className={styles.SignInForm1}>
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter Username" />
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

            <Link to="/dash">
              {" "}
              <button type="submit">Sign In</button>
            </Link>

            <p className={styles.signUpLink}>
              Don't have an account? <Link to="/SignUp">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
