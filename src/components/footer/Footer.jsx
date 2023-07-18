
import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {

  
  return (
    <div className={styles.container}>
        <div>&copy; 2023 ocanza. All rights reserved. </div>
        <div className={styles.social}>
        <a href="http://pinterest.com" target="_blank">
        <Image 
          src="/pinterest.png" 
          width={20} height={20} 
          className={styles.icon} 
          alt="pinterest icon" 
          
        />
        </a>
        <a href="http://twitter.com" target="_blank">
        <Image 
          src="/twitter.png" 
          width={20} height={20} 
          className={styles.icon} 
          alt="twitter icon" 
          
        />
        </a>
        <a href="http://youtube.com" target="_blank">
        <Image 
          src="/youtube.png" 
          width={20} height={20} 
          className={styles.icon} 
          alt="youtube icon" 
      
        />
        </a>
        </div>
    </div>
  )
}

export default Footer