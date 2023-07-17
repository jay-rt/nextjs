import Button from "@/components/button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { items } from "./data";

const getData = (category) => {
  const data = items[category];
  if (data) return data;
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.category__title}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button title="See More" url="#" />
          </div>
          <div className={styles.img__contianer}>
            <Image src={item.image} alt="" fill={true} className={styles.img} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
