import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'



async function getData() {
  const res = await fetch("https://ocanza-prototype.vercel.app/api/posts", {
  // const res = await fetch("http://localhost:3000/api/posts", {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/posts`, {
    cache: "no-store",
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer} >

      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
        <div className={styles.imageContainer}>
          <Image
            src={item.img}
            alt=""
            width={500}
            height={400}
            className={styles.image}
            />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>{item.title}</h1> 
            <p className={styles.date}>Posted: {new Date(item.createdAt).toDateString()}</p></div>
          <div className={styles.desc}>
            <p>{item.desc}</p>
          </div>
        </div>
      </Link>
      ))}   
    </div>
  )
}

export default Blog;