import React from 'react'
import programstyles from '../css/program.module.css'
import fontstyles from '../css/fonts.module.css'


import { GiWeightLiftingUp } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { MdPersonalInjury } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaArrowUpFromWaterPump, FaNairaSign } from "react-icons/fa6";
import { GiBoxingGlove } from "react-icons/gi";
import { GiMeditation } from "react-icons/gi";
import { GiFlameSpin } from "react-icons/gi";
import { FaNutritionix } from "react-icons/fa";


const classes = () => {
  return (
    <section className={programstyles.programsSection}>
        <div className={programstyles.introRow}>
          <h2 className={`${programstyles.heading} ${fontstyles.fontBold}`}>Our All <span className={`${programstyles.imp} ${fontstyles.fontBold}`}>Programs</span></h2>
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

          <div className={programstyles.card}>
            <FaHeartbeat className={programstyles.icon} />
            <h5>Cardio Training</h5>
            <p>Get personalized coaching to reach your fitness goals efficiently.</p>
          </div>
          <div className={programstyles.card}>
            <FaHandHoldingHeart className={programstyles.icon} />
            <h5>Cardio Training</h5>
            <p>Improve heart health and stamina with dynamic cardio routines.</p>
          </div>
          <div className={programstyles.card}>
            <FaArrowUpFromWaterPump className={programstyles.icon} />
            <h5>Swimming</h5>
            <p>Enjoy a low-impact, full-body workout in our premium pools.</p>
          </div>
          <div className={programstyles.card}>
            <GiBoxingGlove className={programstyles.icon} />
            <h5>Boxing</h5>
            <p>Boost strength and agility with energizing boxing classes.</p>
          </div>

          <div className={programstyles.card}>
            <GiMeditation className={programstyles.icon} />
            <h5>Meditation</h5>
            <p>Relax your mind and body with peaceful, guided meditations.</p>
          </div>
          <div className={programstyles.card}>
            <GiWeightLiftingUp className={programstyles.icon} />
            <h5>Weightlifting</h5>
            <p>Master technique and gain strength with expert-led weightlifting sessions.</p>
          </div>
          <div className={programstyles.card}>
            <GiFlameSpin className={programstyles.icon} />
            <h5>Spinning</h5>
            <p>Join fun, high-energy spinning classes for a great cardio workout.</p>
          </div>
          <div className={programstyles.card}>
            <FaNutritionix className={programstyles.icon} />
            <h5>Nutrition Counseling</h5>
            <p>Learn smart eating habits to complement your fitness journey.</p>
          </div>
        </div>
      </section>
  )
}

export default classes