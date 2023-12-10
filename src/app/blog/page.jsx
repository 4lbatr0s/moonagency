import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { baseUrl } from "../page";

async function getData() {
  const res = await fetch(`${baseUrl}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

//INFO: HOW TO DYNAMIC METADATA IN NEXT.JS
export const metadata = {
  title: "Moon Agency Blog - Insights and Inspiration",
  description: "Explore the Moon Agency blog for insightful articles on digital trends, industry news, and tips to enhance your online presence. Stay informed and inspired in the ever-evolving digital landscape.",
};

//INFO: async because its a server side data fetching component.
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
