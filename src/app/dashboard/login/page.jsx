"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn("credentials", input);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={input.email}
          placeholder="Email"
          className={styles.input}
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={input.password}
          placeholder="Password"
          className={styles.input}
          required
          onChange={handleChange}
        />
        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>
      <button
        type="button"
        className={`${styles.btn} ${styles.google}`}
        onClick={() => signIn("google")}
      >
        Signin using Google
      </button>
      <Link href="/dashboard/register">Register</Link>
    </div>
  );
};

export default Login;
