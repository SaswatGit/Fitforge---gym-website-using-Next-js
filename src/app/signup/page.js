'use client';

import React, { useState } from 'react';
import formstyles from '../css/formpage.module.css';
import fontstyles from '../css/fonts.module.css';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
import Button from '../components/button';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/api/user', user);
    console.log(response.data);
    if (response.data.success) {
      Swal.fire({
        title: 'Success',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'OK',
        showCancelButton: false,
      }).then(() => {
        router.push('/signin');
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
          Create Your{' '}
          <span className={`${fontstyles.fontBold} ${formstyles.imp}`}>Account</span>
        </h2>
        <p className={formstyles.subText}>
          Join us today! Start your journey toward a healthier, stronger, and more confident you.
        </p>
        <form className={formstyles.form} onSubmit={handleSubmit}>
          <div className={formstyles.formGroup}>
            <label htmlFor="name" className={formstyles.label}>
              Full Name
            </label>
            <input
              className={formstyles.input}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
          </div>
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
              onChange={handleChange}
              required
            />
          </div>
          <div className={formstyles.formGroup}>
            <label htmlFor="mobile-no" className={formstyles.label}>
              Mobile No.
            </label>
            <input
              className={formstyles.input}
              type="number"
              id="mobile_no"
              name="mobile_no"
              placeholder="Enter your mobile number"
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
          </div>
          <div className={formstyles.formGroup}>
            <label htmlFor="cpassword" className={formstyles.label}>
              Confirm Password
            </label>
            <input
              className={formstyles.input}
              type="password"
              id="cpassword"
              name="cpassword"
              placeholder="Reenter your password"
              onChange={handleChange}
              required
            />
          </div>
          <div className={formstyles.formGroup}>
            <label htmlFor="cpassword" className={formstyles.label}>
              Bio
            </label>
            <textarea
              className={formstyles.input}
              id="bio"
              name="bio"
              placeholder="Enter bio"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <Button text="Signup" />
          <p>
            Already have an Account?{' '}
            <Link className={formstyles.authlink} href="/signin">
              Signin
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Signup), { ssr: false });
