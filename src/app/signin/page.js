'use client';

import React, { useState } from 'react';
import formstyles from '../css/formpage.module.css';
import fontstyles from '../css/fonts.module.css';
import Button from '../components/button';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
import dynamic from "next/dynamic";


const Signin = () => {
  const [user, setUser] = useState(null);


  const handleChagne = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await axios.post(`http://localhost:3000/api/user/signin`, user);
    const response = await axios.post(`https://fitforge-gym-website-using-next-js.onrender.com/api/user/signin`, user);
    if (response.data.success) {
      Swal.fire({
        title: 'Success',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'OK',
        showCancelButton: false,
      }).then(() => {
        localStorage.setItem('user_id', response.data.user_id);
        window.location.href = `/user-profile/${response.data.user_id}`;
      })
    } else {
      Swal.fire({
        title: 'Error',
        text: response.data.message,
        icon: 'error',
        confirmButtonText: 'OK',
        showCancelButton: false,
      })
    }
  }

  return (
    <section className={formstyles.formpage}>
      <div className={formstyles.container}>
        <h2 className={`${formstyles.heading} ${fontstyles.fontBold}`}>
          Signin <span className={`${fontstyles.fontBold} ${formstyles.imp}`}>Here</span>
        </h2>
        <p className={formstyles.subText}>
          Sign in to continue your fitness journey and achieve your goals with us.
        </p>
        <form className={formstyles.form} onSubmit={handleSubmit}>
          <div className={formstyles.formGroup}>
            <label htmlFor="email" className={formstyles.label}>
              Email
            </label>
            <input
              className={formstyles.input}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChagne}
              required
            />
          </div>
          <div className={formstyles.formGroup}>
            <label htmlFor="password" className={formstyles.label}>
              Password
            </label>
            <input
              className={formstyles.input}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChagne}
              required
            />
          </div>
          <Button text="Signin" />
          <p>
            Don not have an Account ?{' '}
            <Link className={formstyles.authlink} href="/signup">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Signin), { ssr: false });
