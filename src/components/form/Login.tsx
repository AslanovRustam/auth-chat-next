"use client";
import { ChangeEvent, FormEvent, useState } from "react";
// Components
import Devider from "../devider/Devider";
// Utils
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Logo from "../../../public/unicorn-logo.svg";
import Google from "../../../public/google.svg";
import { IUser } from "@/types/types";
import styles from "./login.module.scss";

type Props = {};

export default function Login({}: Props) {
  const [credentials, setCredentials] = useState<IUser>({
    userName: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordInput = () => {
    setShowPassword(!showPassword);
  };

  const toggleSignup = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleSubmitGoogle = () => {};

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <h2 className={styles.title}>Nice to see you again</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <span className={styles.inputTitle}>Login</span>
          <input
            type="text"
            placeholder="Email or phone number"
            name="userName"
            value={credentials.userName}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.inputTitle}>Password</span>
          <div className={styles.group}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              className={styles.input}
            />
            <div className={styles.eye} onClick={togglePasswordInput}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </label>
        {!isSignUp && (
          <div className={styles.wrapper}>
            <label className={styles.labelCheckbox}>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.customCheckbox}></span>
              <span className={styles.text}>Remember me</span>
            </label>
            <p className={styles.forgot}>Forgot password?</p>
          </div>
        )}
        <button type="submit" className={styles.button}>
          {isSignUp ? "Sign up" : "Sign in"}
        </button>
      </form>
      <Devider style={{ margin: "32px 0 32px" }} />
      <button
        type="button"
        onClick={handleSubmitGoogle}
        className={styles.buttonGoogle}
      >
        <Google />
        Or sign in with Google
      </button>
      <p className={styles.switcher}>
        {isSignUp ? "Have an account?" : "Dont have an account?"}
        <span onClick={toggleSignup}>
          {isSignUp ? "Sign in now" : "Sign up now"}
        </span>
      </p>
    </div>
  );
}
