import React from 'react'
import privacyStyles from '../css/privacypolicy.module.css';

const privacyPolicy = () => {
  return (
    <section className={privacyStyles.privacyPolicy}>
      <h1 className={privacyStyles.heading}>Privacy Policy</h1>

      <div className={privacyStyles.section}>
        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details provided during sign-up or purchases.</li>
          <li><strong>Usage Data:</strong> Information about your interactions with our website, such as IP address, browser type, and time spent on pages.</li>
          <li><strong>Cookies:</strong> Small files stored on your device to enhance user experience and provide personalized services.</li>
        </ul>
      </div>

      <div className={privacyStyles.section}>
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and maintain our services.</li>
          <li>Improve user experience and tailor our offerings.</li>
          <li>Process transactions and send notifications about your account.</li>
          <li>Comply with legal obligations and protect against fraudulent activities.</li>
        </ul>
      </div>

      <div className={privacyStyles.section}>
        <h2>3. Sharing Your Information</h2>
        <p>We do not sell or rent your information. However, we may share it with:</p>
        <ul>
          <li>Third-party service providers to facilitate our services.</li>
          <li>Authorities to comply with legal obligations or protect our rights.</li>
        </ul>
      </div>

      <div className={privacyStyles.section}>
        <h2>4. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information.</li>
          <li>Opt out of marketing communications.</li>
          <li>Request clarification about how your data is used.</li>
        </ul>
      </div>

      <div className={privacyStyles.section}>
        <h2>5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Email: support@fitforge.com</p>
        <p>Phone: +1-800-FIT-FORGE</p>
      </div>
    </section>
  )
}

export default privacyPolicy