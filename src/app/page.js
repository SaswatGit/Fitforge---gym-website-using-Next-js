import React from 'react'
import HeroImg from '../../public/hero-img.png'
import GoalImg from '../../public/goal-img.jpg'
import Image from 'next/image'
import homestyles from './css/Home/home.module.css'
import herostyles from './css/Home/hero.module.css'
import goalstyles from './css/Home/goal.module.css'
import scrollsecstyles from './css/Home/scrollsec.module.css'
import programstyles from './css/Home/program.module.css'
import planstyles from './css/Home/plan.module.css'
import fontstyles from './css/fonts.module.css'
import Button from './components/button'

import { GiWeightLiftingUp } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { MdPersonalInjury } from "react-icons/md";
import Link from 'next/link'

const home = () => {
  return (
    <main className={homestyles.home}>
      <section className={herostyles.hero}>
        <div className={herostyles.text}>
          <h1 className={fontstyles.fontBold}>Transform Your <span className={`${goalstyles.imp} ${fontstyles.fontBold}`}>Fitness Journey</span> with Us</h1>
          <p>Discover a community-driven gym experience, state-of-the-art equipment, and expert-led classes designed to help you reach your goals.</p>
          <Link href='/contact'>
            <Button text="Get Started" />
          </Link>
        </div>
        <div className={herostyles.img}>
          <Image src={HeroImg} alt='Gym' className={herostyles.imgEle} />
        </div>
      </section>
      <section className={scrollsecstyles.scrollsec}>
        <div className={scrollsecstyles.num}>
          <p className={fontstyles.fontBold}><span className={`${scrollsecstyles.imp} ${fontstyles.fontBold}`}>600+</span> Cities</p>
          <p>Our gyms are available in over 600 cities, bringing fitness closer to you.</p>
        </div>
        <div className={scrollsecstyles.cities}>
          <ul className={scrollsecstyles.cityNames}>
            <li>New York</li>
            <li>Los Angeles</li>
            <li>Chicago</li>
            <li>Houston</li>
            <li>Phoenix</li>
            <li>Philadelphia</li>
            <li>San Antonio</li>
            <li>San Diego</li>
          </ul>
          <ul className={scrollsecstyles.cityNames}>
            <li>New York</li>
            <li>Los Angeles</li>
            <li>Chicago</li>
            <li>Houston</li>
            <li>Phoenix</li>
            <li>Philadelphia</li>
            <li>San Antonio</li>
            <li>San Diego</li>
          </ul>
        </div>
      </section>
      <section className={goalstyles.goal}>
        <div className={goalstyles.img}>
          <Image src={GoalImg} alt='Gym' className={goalstyles.imgEle} />
        </div>
        <div className={goalstyles.text}>
          <h2 className={fontstyles.fontBold}>Achieve Your <span className={`${herostyles.imp} ${fontstyles.fontBold}`}>Fitness Goals</span> with Us</h2>
          <p>Whether you're aiming to build strength, improve endurance, or enhance flexibility, our personalized programs and supportive community are here to help you succeed every step of the way.</p>
          <Link href='/contact'>
            <Button text="Start Today" />
          </Link>
        </div>
      </section>
      <section className={programstyles.programsSection}>
        <div className={programstyles.introRow}>
          <h2 className={`${programstyles.heading} ${fontstyles.fontBold}`}>Our Best <span className={`${programstyles.imp} ${fontstyles.fontBold}`}>Programs</span></h2>
          <p className={programstyles.introParagraph}>
            We offer a wide variety of programs tailored to suit different fitness needs, from strength training to yoga, and more.
          </p>
        </div>
        <div className={programstyles.cardsContainer}>
          <div className={programstyles.card}>
            <GiWeightLiftingUp className={programstyles.icon} />
            <h5>Strength Training</h5>
            <p>Build muscle and improve endurance with our strength training programs.</p>
          </div>
          <div className={programstyles.card}>
            <GrYoga className={programstyles.icon} />
            <h5>Yoga</h5>
            <p>Find balance and flexibility in our calming yoga classes.</p>
          </div>
          <div className={programstyles.card}>
            <MdOutlineSportsGymnastics className={programstyles.icon} />
            <h5>HIIT</h5>
            <p>High-Intensity Interval Training for those who want an intense workout.</p>
          </div>
          <div className={programstyles.card}>
            <MdPersonalInjury className={programstyles.icon} />
            <h5>Personal Training</h5>
            <p>Get one-on-one training tailored specifically to your goals.</p>
          </div>
        </div>
      </section>
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
    </main>
  )
}

export default home