"use client";

import React, { useState, useEffect } from 'react'
import dashboardstyles from '../../css/dashboard.module.css';
import fontstyles from '../../css/fonts.module.css';
import axios from 'axios';
import Link from 'next/link';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/`);
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
    const getTrainers = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/trainer/`);
        setTrainers(response.data.trainers);
      } catch (error) {
        console.log(error);
      }
    }
    getTrainers();
  }, []);


  return (
    <div className={dashboardstyles.dashboard}>
      <h1 className={`${dashboardstyles.heading} ${fontstyles.fontBold}`}>Admin <span className={`${dashboardstyles.imp} ${fontstyles.fontBold}`}>Dashboard</span></h1>
      <p className={dashboardstyles.description}>
        Welcome to the admin dashboard! Here, you can manage your gym's operations, members, and more. Get started by clicking on any of the buttons below.
      </p>

      <div className={dashboardstyles.con}>
        <div className={dashboardstyles.users}>
          <div className={dashboardstyles.usersContainer}>
            {
              users.map((user, index) => {
                return (
                  <div className={dashboardstyles.user} key={index}>
                    <h3>{user.name}</h3>
                    <Link href={`/user-profile/${user._id}`} target='_blank' className={dashboardstyles.link}>Visit Profile</Link>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={dashboardstyles.trainers}>
          <div className={dashboardstyles.trainersContainer}>
            {
              trainers.map((trainer, index) => {
                return (
                  <div className={dashboardstyles.trainer} key={index}>
                    <h3>{trainer.name}</h3>
                    <Link href={`/trainer/profile/${trainer._id}`} target='_blank' className={dashboardstyles.link}>Visit Profile</Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard