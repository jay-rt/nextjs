"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import usePosts from "../hooks/usePosts";
import setError from "@/utils/error";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    status === "unauthenticated" && router.push("/dashboard/login");
  }, [router, status]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) await setError(res);
      mutate();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          userId: session.user.id,
        }),
      });

      if (!res.ok) await setError(res);
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err.message);
    }
  };

  const { isLoading, data, error, mutate } = usePosts(
    `/api/posts?userId=${session?.user.id}`
  );

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <p>Redirecting...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {error
          ? error.message
          : isLoading
          ? "loading"
          : data.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.img_container}>
                  <Image
                    src={post.image}
                    alt=""
                    width={200}
                    height={100}
                    className={styles.img}
                  />
                </div>
                <h2 className={styles.post_title}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  Delete
                </span>
              </div>
            ))}
      </div>
      <div className={styles.new}>
        <h1>Add New Post</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input
            type="text"
            placeholder="Image Link"
            className={styles.input}
          />
          <textarea
            placeholder="Content"
            className={styles.text_area}
            cols="30"
            rows="10"
          />
          <button type="submit" className="btn">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
