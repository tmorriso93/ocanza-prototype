import Image from 'next/image'
import styles from './page.module.css'
import TravelArt from 'public/travelart003.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
   <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          OCanza will help you Embark on a journey of adventure and tranquility with our hiking blog
        </h1>
        <p className={styles.desc}>
          Hiking in the great outdoors provides a perfect opportunity to unwind and find relaxation amidst the beauty of nature.
          we will unveil hidden trails, share expert tips, and inspire wanderlust for outdoor enthusiasts seeking unforgettable experiences in nature
        </p>
        <Button url="blog" text="Read Our Blogs" />
      </div>
      <div className={styles.item}>
      <Image 
        src={TravelArt}
        width={650} height={500} 
        alt="3d camp site image"
        className={styles.img}
      />
   </div>
   </div>
  )
}
