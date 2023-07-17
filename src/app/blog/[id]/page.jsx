import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>Desc</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/872756/pexels-photo-872756.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.img__container}>
          <Image
            src="https://images.pexels.com/photos/9391321/pexels-photo-9391321.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
          dolor, optio voluptatibus magnam iure esse tempora beatae. A suscipit
          eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
          dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit
          eos. Animi quibusdam cum omnis officiis
          <br />
          <br />
          voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
          esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
          officiis voluptatum quo ea eveniet?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
