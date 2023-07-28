"use client";

import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();

  useEffect(() => {
    status === "unauthenticated" && router.push("/dashboard/login");
  }, [router, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <p>Redirecting...</p>;

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
