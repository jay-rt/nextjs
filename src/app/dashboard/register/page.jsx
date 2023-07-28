"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const router = useRouter();

  useEffect(() => {
    input.confirmPassword !== "" &&
      input.confirmPassword !== input.password &&
      setError({ isError: true, message: "Password doesn't match" });
    input.confirmPassword === input.password &&
      setError({ isError: false, message: "" });
  }, [input.password, input.confirmPassword]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = input;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (!res.ok) {
        const message = await res.text();
        setError({
          isError: true,
          message: message,
        });
      }

      res.status === 201 && router.push("/dashboard/login");
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(
        () =>
          setError({
            isError: false,
            message: "",
          }),
        2000
      );
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={input.name}
          placeholder="Name"
          className={styles.input}
          required
          onChange={handleChange}
        />
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
        <input
          type="password"
          name="confirmPassword"
          value={input.confirmPassword}
          placeholder="Confirm password"
          className={styles.input}
          required
          onChange={handleChange}
        />
        {error.isError && <span className={styles.error}>{error.message}</span>}
        <button type="submit" className={styles.btn} disabled={error.isError}>
          Register
        </button>
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
