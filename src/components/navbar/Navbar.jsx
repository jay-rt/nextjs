"use client";
import { signOut, useSession } from "next-auth/react";
import ThemeButton from "../themeButton/ThemeButton";
import styles from "./navbar.module.css";
import Link from "next/link";
import Button from "../button/Button";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const { status } = useSession();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        JayRt
      </Link>
      <div className={styles.links}>
        <ThemeButton />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {status === "authenticated" && (
          <button onClick={signOut} className={styles.btn} type="submit">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
