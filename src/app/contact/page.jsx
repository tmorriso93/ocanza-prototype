import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
  title: 'OCANZA Contact Information',
  description: 'This is the Contact Page',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src="/gotmail001.jpg"
            alt="an image of email envolopes"
            fill={true}
            sizes='(max-width: 768px) 100vw'
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea className={styles.textArea} placeholder='message' id="" cols="30" rows="10"></textarea>
          <Button url="#" text="Send">Send</Button>
        </form>

      </div>
    </div>
  )
}

export default Contact