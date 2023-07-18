import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from "next/navigation"

async function getData(id) {
  // const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, {
     cache: 'no-store',
     })
     
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound()
  }
 
  return res.json()
}

export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
           {data.title}
          </h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <div className={styles.imageMain}>
            <Image 
              src={data.img}
              alt="pic of planet"
              width={40}
              height={40}
              className={styles.avatar}
              />
              </div>
              <span className={styles.username}>{data.username}</span>
              <p className={styles.date}>{new Date(data.createdAt).toDateString()}</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src={data.img}
            alt=''
            fill={true}
            sizes="(max-width: 500px)"
            className={styles.image}
            />
        </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            {data.content}
          </p>
        </div>
      </div>
    
  )
}


export default BlogPost