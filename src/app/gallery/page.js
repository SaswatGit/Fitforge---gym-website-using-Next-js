import React from 'react'
import gallerystyles from '../css/gallery.module.css'
import fontstyles from '../css/fonts.module.css'
import Img1 from '../../../public/gallery/img-1.jpg'
import Img2 from '../../../public/gallery/img-2.jpg'
import Img3 from '../../../public/gallery/img-3.jpg'
import Img4 from '../../../public/gallery/img-4.jpg'
import Img5 from '../../../public/gallery/img-5.jpg'
import Img6 from '../../../public/gallery/img-6.jpg'
import Img7 from '../../../public/gallery/img-7.jpg'
import Img8 from '../../../public/gallery/img-8.jpg'
import Img9 from '../../../public/gallery/img-9.jpg'
import Img10 from '../../../public/gallery/img-10.jpg'
import Img11 from '../../../public/gallery/img-11.jpg'
import Image from 'next/image'

const gallery = () => {
  return (
    <section className={gallerystyles.gallery}>
      <h2 className={`${gallerystyles.imp} ${fontstyles.fontBold}`}>Gallery</h2>
      <div className={gallerystyles.galleryContainer}>
        <div className={gallerystyles.galleryItem}>
          <Image className={gallerystyles.img} src={Img1} />
        </div>
        <div className={gallerystyles.galleryItem}>
          <Image className={gallerystyles.img} src={Img2} />
        </div>
        <div className={gallerystyles.galleryItem}>
          <Image className={gallerystyles.img} src={Img3} />
        </div>
        <div className={gallerystyles.galleryItem}>
          <Image className={gallerystyles.img} src={Img4} />
        </div>
        <div className={gallerystyles.galleryItem}>
          <Image className={gallerystyles.img} src={Img5} />
        </div>
        <div className={gallerystyles.galleryItem}>
          <Image className={gallerystyles.img} src={Img6} />
        </div>
        <div className={gallerystyles.galleryItem}>
          <Image className={gallerystyles.img} src={Img7} />
        </div>
        <div className={gallerystyles.galleryItem}>
          <Image className={gallerystyles.img} src={Img8} />
        </div>
        <div className={gallerystyles.galleryItem}>
          <Image className={gallerystyles.img} src={Img9} />
        </div>
        <div className={gallerystyles.galleryItem}>
          <Image className={gallerystyles.img} src={Img10} />
        </div>
        <div className={gallerystyles.galleryItem}>
          <Image className={gallerystyles.img} src={Img11} />
        </div>
      </div>
    </section>
  )
}

export default gallery