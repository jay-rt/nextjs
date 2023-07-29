"use client";

import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    status === "unauthenticated" && router.push("/dashboard/login");
  }, [router, status]);

  const fetchPosts = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error();
      error.status = res.status;
      error.message = await res.text();
      throw error;
    }

    return res.json();
  };

  const { isLoading, data, error } = useSWR(
    `/api/posts?username=${session?.user.username}`,
    fetchPosts
  );

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <p>Redirecting...</p>;

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
