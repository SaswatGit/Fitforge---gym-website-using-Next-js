'use client';

import React, { useState } from 'react';
import formstyles from '../../css/formpage.module.css';
import fontstyles from '../../css/fonts.module.css';
import Button from '../../components/button';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const Signin = () => {
  const router = useRouter();
  const [trainer, setTrainer] = useState(null);

  const handleChagne = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTrainer({
      ...trainer,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(trainer)
    const response = await axios.post(`${process.env.ROOT_URL}/api/trainer/signin`, trainer);
    if (response.data.success) {
      Swal.fire({
        title: 'Success',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'OK',
        showCancelButton: false,
      }).then(() => {
        localStorage.setItem('trainer_id', response.data.trainer_id);
        window.location.href = `/trainer/profile/${response.data.trainer_id}`;
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
          Signin as Trainer <span className={`${fontstyles.fontBold} ${formstyles.imp}`}>Here</span>
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
            Do not have an Account ?{' '}
            <Link className={formstyles.authlink} href="/trainer/signup">
              Create Trainer Account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Signin), { ssr: false });
