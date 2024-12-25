import React from 'react'
import Button from '../components/button'
import planstyles from '../css/plan.module.css'
import fontstyles from '../css/fonts.module.css'
import Link from 'next/link'

const Memberships = () => {
  return (
    <section className={planstyles.pricingSection}>
      <h2 className={`${planstyles.heading} ${fontstyles.fontBold}`}>Choose Your <span className={`${planstyles.imp} ${fontstyles.fontBold}`}>Plan</span></h2>
      <p className={planstyles.description}>
        Select a membership plan that suits your fitness needs and goals. All plans come with access to top-notch facilities, professional trainers, and flexible hours.
      </p>
      <div className={planstyles.cardsContainer}>
        <div className={planstyles.card}>
          <h3 className={fontstyles.fontBold}>Basic Plan</h3>
          <p className={planstyles.price}>$20/month</p>
          <p>Access to gym facilities and standard equipment.</p>
          <Link href='/contact'>
            <Button text="Book Now" />
          </Link>
        </div>
        <div className={planstyles.card}>
          <h3 className={fontstyles.fontBold}>Standard Plan</h3>
          <p className={planstyles.price}>$40/month</p>
          <p>Includes group classes and advanced equipment access.</p>
          <Link href='/contact'>
            <Button text="Book Now" />
          </Link>
        </div>
        <div className={planstyles.card}>
          <h3 className={fontstyles.fontBold}>Premium Plan</h3>
          <p className={planstyles.price}>$60/month</p>
          <p>All-access membership with personal training sessions.</p>
          <Link href='/contact'>
            <Button text="Book Now" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Memberships