import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

export const metadata = {
  title: "JayRt Blog Page",
  description: "This is an a blog page",
};

const Blog = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.main__container}>
      {posts.map((post) => (
        <Link
          href={`/blog/${post._id}`}
          className={styles.container}
          key={post._id}
        >
          <div className={styles.image__container}>
            <Image
              src={post.image}
              alt=""
              width={400}
              height={250}
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
