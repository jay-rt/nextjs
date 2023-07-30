import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

const getPost = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  const post = await getPost(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const post = await getPost(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.desc}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/872756/pexels-photo-872756.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{post.userId.username}</span>
          </div>
        </div>
        <div className={styles.img__container}>
          <Image src={post.image} alt="" fill={true} className={styles.img} />
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
