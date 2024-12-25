import React from 'react'
import fontstyles from '../css/fonts.module.css'
import blogstyles from '../css/blog.module.css'
import Image from 'next/image'
import TestImg from '../../../public/goal-img.jpg'


const blogs = () => {
  return (
    <section className={`${blogstyles.blog}`}>
      <h2 className={fontstyles.fontBold}>Read Our <span className={`${blogstyles.imp} ${fontstyles.fontBold}`}>Blogs</span></h2>
      <div className={blogstyles.blogContainer}>
        <div className={blogstyles.blogItem}>
          <div className={blogstyles.imgContainer}>
            <Image className={blogstyles.img} src={TestImg} />
          </div>
          <div className={blogstyles.textContainer}>
            <h3 className={`${blogstyles.imp} ${fontstyles.fontBold}`}>Blog Title</h3>
            <p>23.10.2022</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default blogs