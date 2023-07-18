import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/banner03.jpg" 
         fill={true}
         className={styles.img}
         />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Random titles Goes Here</h1>
          <h2 className={styles.imgDesc}>Random title Number 2 Goes Here</h2>
        </div>
      </div> 
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Title 3 Goes Here</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro soluta inventore 
            aliquid nemo ipsum facilis aut tempora. Delectus alias voluptatibus odio nostrum 
            reprehenderit eius deleniti, tenetur ratione est rerum consectetur reiciendis expedita
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro soluta inventore 
            aliquid nemo ipsum facilis aut tempora.
            <br />
            <br />
            Delectus alias voluptatibus odio nostrum 
            reprehenderit eius deleniti, tenetur ratione est rerum consectetur reiciendis expedita
             ut praesentium amet non quis voluptates dolore molestiae perspiciatis
             quia incidunt. Sequi harum facilis qui inventore quis odit!
             </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>Title 4 Goes Here</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo optio, magni unde autem error 
          cupiditate nulla? Architecto, asperiores sunt placeat reprehenderit esse modi in eos pariatur
          vitae impedit fuga accusantium.
          <br />
          <br />
          - Lorem ipsum dolor sit amet
          <br />
          <br />
          - adipisicing natus aliquam
          <br />
          <br />
          - obcaecati deleniti saepe it
        </p>
        <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About