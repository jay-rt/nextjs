"use client";
import ThemeButton from "../themeButton/ThemeButton";
import styles from "./navbar.module.css";
import Link from "next/link";

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
        <button
          onClick={() => console.log("logout")}
          className={styles.btn}
          type="submit"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
