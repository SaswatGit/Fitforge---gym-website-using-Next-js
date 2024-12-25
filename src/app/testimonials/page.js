import React from 'react';
import testimonialStyles from '../css/testimonial.module.css';
import fontstyles from '../css/fonts.module.css';

const Testimonials = () => {
  return (
    <section className={testimonialStyles.testimonialSection}>
      <h2 className={testimonialStyles.heading}>
        What Our <span className={`${fontstyles.fontBold} ${testimonialStyles.imp}`}>Members</span> Say
      </h2>
      <div className={testimonialStyles.grid}>
        <div className={`${testimonialStyles.testimonial} ${testimonialStyles.width30}`}>
          <p>&quot;FitForge helped me achieve my fitness goals in no time. The personalized attention from trainers is unmatched!&quot;</p>
          <span>- Liam K.</span>
        </div>
        <div className={`${testimonialStyles.testimonial} ${testimonialStyles.width70}`}>
          <p>&quot;I never thought I&quot;d enjoy working out until I joined FitForge. The energy in the gym keeps me motivated!&quot;</p>
          <span>- Ava P.</span>
        </div>
      </div>
      <div className={testimonialStyles.grid}>
        <div className={`${testimonialStyles.testimonial} ${testimonialStyles.width70}`}>
          <p>&quot;FitForge&quot;s facilities are world-class. From the equipment to the classes, everything is top-notch!&quot;</p>
          <span>- Noah L.</span>
        </div>
        <div className={`${testimonialStyles.testimonial} ${testimonialStyles.width30}`}>
          <p>&quot;The community at FitForge is incredible. It&quot;s inspiring to work out with such driven individuals!&quot;</p>
          <span>- Mia R.</span>
        </div>
      </div>
      <div className={testimonialStyles.grid}>
        <div className={`${testimonialStyles.testimonial} ${testimonialStyles.width30}`}>
          <p>&quot;Joining FitForge changed my life. The trainers pushed me to levels I never thought I could reach!&quot;</p>
          <span>- Ethan T.</span>
        </div>
        <div className={`${testimonialStyles.testimonial} ${testimonialStyles.width70}`}>
          <p>&quot;The variety of fitness programs at FitForge keeps things exciting. I love trying something new every week!&quot;</p>
          <span>- Isabella M.</span>
        </div>
      </div>
      <div className={testimonialStyles.grid}>
        <div className={`${testimonialStyles.testimonial} ${testimonialStyles.width70}`}>
          <p>&quot;FitForge creates a perfect blend of professionalism and fun. I look forward to every session!&quot;</p>
          <span>- Lucas H.</span>
        </div>
        <div className={`${testimonialStyles.testimonial} ${testimonialStyles.width30}`}>
          <p>&quot;The yoga classes at FitForge are a game-changer. I feel relaxed and rejuvenated after each session!&quot;</p>
          <span>- Charlotte S.</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
