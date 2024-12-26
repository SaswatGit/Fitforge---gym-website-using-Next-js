'use client';

import React, { useState } from 'react';
import formstyles from '../../css/formpage.module.css';
import fontstyles from '../../css/fonts.module.css';
import Button from '../../components/button';
import axios from 'axios';
import Swal from 'sweetalert2';
import dynamic from 'next/dynamic';

const Signin = () => {
  const [admin, setAdmin] = useState(null);

  const handleChagne = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAdmin({
      ...admin,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`https://fitforge-gym-website-using-next-js.onrender.com/api/admin`, admin);
    if (response.data.success) {
      Swal.fire({
        title: 'Success',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'OK',
        showCancelButton: false,
      }).then(() => {
        localStorage.setItem('admin_id', response.data.admin_id);
        window.location.href = '/admin/dashboard';
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
          Signin As <span className={`${fontstyles.fontBold} ${formstyles.imp}`}>Admin</span>
        </h2>
        <p className={formstyles.subText}>
          Sign in to manage users and trainers.
        </p>
        <form className={formstyles.form} onSubmit={handleSubmit}>
          <div className={formstyles.formGroup}>
            <label htmlFor="admin_username" className={formstyles.label}>
              Username
            </label>
            <input
              className={formstyles.input}
              type="text"
              id="admin_username"
              name="admin_username"
              placeholder="Enter admin username"
              onChange={handleChagne}
              required
            />
          </div>
          <div className={formstyles.formGroup}>
            <label htmlFor="admin_password" className={formstyles.label}>
              Password
            </label>
            <input
              className={formstyles.input}
              type="password"
              id="admin_password"
              name="admin_password"
              placeholder="Enter admin password"
              onChange={handleChagne}
              required
            />
          </div>
          <Button text="Signin" />
        </form>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Signin), { ssr: false });
