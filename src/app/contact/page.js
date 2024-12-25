import React from 'react'
import formstyles from '../css/formpage.module.css'
import fontstyles from '../css/fonts.module.css'
import Button from '../components/button'

const contact = () => {
  return (
    <section className={formstyles.formpage}>
      <div className={formstyles.container}>
        <h2 className={`${formstyles.heading} ${fontstyles.fontBold}`}>Book <span className={`${fontstyles.fontBold} ${formstyles.imp}`}>Now</span></h2>
        <p className={formstyles.subText}>
          Have questions or want to learn more? Contact us today!
        </p>
        <form className={formstyles.form}>
          <div className={formstyles.formGroup}>
            <label htmlFor="name" className={formstyles.label}>Name</label>
            <input
              className={formstyles.input}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={formstyles.formGroup}>
            <label htmlFor="email" className={formstyles.label}>Email</label>
            <input
              className={formstyles.input}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={formstyles.formGroup}>
            <label htmlFor="message" className={formstyles.label} >Message</label>
            <textarea
              className={formstyles.textarea}
              id="message"
              name="message"
              placeholder="Write your message here"
              rows="5"
              required
            ></textarea>
          </div>
          <Button text="Send Message" />
        </form>
      </div>
    </section>
  )
}

export default contact