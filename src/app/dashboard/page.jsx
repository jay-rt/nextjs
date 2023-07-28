"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (status === "unauthenticated") return router?.push("/dashboard/login");
  return <div>Dashboard</div>;
};

export default Dashboard;
