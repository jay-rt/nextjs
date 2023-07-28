"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

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
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;
