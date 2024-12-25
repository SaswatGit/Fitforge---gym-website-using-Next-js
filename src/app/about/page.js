import React from 'react'
import styles from '../css/about.module.css'
import fontstyles from '../css/fonts.module.css'
import Image from 'next/image'
import Button from '../components/button'
import AboutImage from '../../../public/about-img.png'

const about = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.textContainer}>
        <h2 className={`${styles.heading} ${fontstyles.fontBold}`}>About <span className={`${styles.imp} ${fontstyles.fontBold}`}>FitForge</span></h2>
        <p className={styles.paragraph}>
          At FitForge, we are committed to helping you achieve your fitness goals. Whether you're looking to build strength, improve flexibility, or simply stay healthy, our team of expert trainers and state-of-the-art facilities are here to support you every step of the way. Join us and take your fitness journey to the next level!
        </p>
        <Button text="Visit Gallery" />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={AboutImage}
          alt="Gym Image"
          className={styles.image}
        />
      </div>
    </section>
  )
}

export default about