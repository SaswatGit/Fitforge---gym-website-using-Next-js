import React from 'react'
import formstyles from '../css/formpage.module.css'
import fontstyles from '../css/fonts.module.css'
import Button from '../components/button'
import Link from 'next/link'

const GalleryPost = () => {
  return (
    <section className={formstyles.formpage}>
      <div className={formstyles.container}>
        <h2 className={`${formstyles.heading} ${fontstyles.fontBold}`}>Gallery Image <span className={`${fontstyles.fontBold} ${formstyles.imp}`}>Post</span></h2>
        <p className={formstyles.subText}>
          Upload Gallery Image Here
        </p>
        <form className={formstyles.form}>
          <div className={formstyles.formGroup}>
            <label htmlFor="email" className={formstyles.label}>Gallery Image:</label>
            <input
              className={formstyles.input}
              type="file"
              id="img"
              name="img"
              required
            />
          </div>
          <Button text="Upload" />
        </form>
      </div>
    </section>
  )
}

export default GalleryPost