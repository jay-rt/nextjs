"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setSuccess(params.get("success"));
    setError(params.get("error"));
  }, [params]);

  useEffect(() => {
    status === "authenticated" && router.push("/dashboard");
  }, [router, status]);

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

  if (status === "loading") return <p>Loading...</p>;
  if (status === "authenticated") return <p>Redirecting...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>
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
        <button type="submit" className={`btn ${styles.btn}`}>
          Login
        </button>
      </form>
      <button
        type="button"
        className={`btn ${styles.btn} ${styles.google}`}
        onClick={() => signIn("google")}
      >
        Signin using Google
      </button>
      {error && <span className={styles.error}>{error}</span>}
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;
