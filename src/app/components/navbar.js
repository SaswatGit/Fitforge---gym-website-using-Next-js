"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../css/navbar.module.css';
import btnstyles from '../css/button.module.css';
import fontstyles from '../css/fonts.module.css';
import Button from './button';
import Image from 'next/image';
import axios from 'axios';
import ProfilePic from '../../../public/profile-pic.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const [userId, setUserId] = useState(null);
  const [userProfilePic, setUserProfilePic] = useState(null);

  const [trainerId, setTrainerId] = useState(null);
  const [trainerProfilePic, setTrainerProfilePic] = useState(null);

  const [adminId, setAdminId] = useState(null);

  useEffect(() => {
    setUserId(localStorage.getItem("user_id"));
    setTrainerId(localStorage.getItem("trainer_id"));
    setAdminId(localStorage.getItem("admin_id"));
  });

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`https://fitforge-gym-website-using-next-js.onrender.com/api/user/${userId}`);
      if (response.data.userPic) {
        setUserProfilePic(response.data.userPic[0].pic);
      }
    }
    getUser();

    const getTrainer = async () => {
      const response = await axios.get(`https://fitforge-gym-website-using-next-js.onrender.com/api/trainer/${trainerId}`);
      if (response.data.trainerPic) {
        setTrainerProfilePic(response.data.trainerPic[0].pic);
      }
    }
    getTrainer();
  })

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const signout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("trainer_id");
    localStorage.removeItem("admin_id");
    window.location.href = "/";
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" className={fontstyles.fontBold}>FitForge</Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        {
          !adminId && <li>
            <Link href="/about">About Us</Link>
          </li>
        }
        {
          !adminId && <li>
            <Link href="/classes">Classes & Programs</Link>
          </li>
        }

        {
          !adminId && <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        }
        {
          !adminId && <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>
        }


        {userId && <li>
          <Link href="/memberships">Membership Plans</Link>
        </li>}
        {
          !adminId && <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        }

        {userId && <li>
          <Link href={`/user-profile/${userId}`}>
            {/* <Image src={userProfilePic ? `/uploads/${userProfilePic}` : ProfilePic} className={styles.profilePic} alt='Profile Image' width={40} height={40} />
             */}
            Profile
          </Link>
        </li>}


        {
          userId && <li>
            <button className={btnstyles.btn} onClick={signout}>Signout</button>
          </li>
        }


        {trainerId && <li>
          <Link href={`/trainer/profile/${trainerId}`}>
            {/* <Image src={`/uploads/${trainerProfilePic}`} className={styles.profilePic} alt='Profile Image' width={40} height={40} /> */}
            Profile
          </Link>
        </li>}
        {
          !trainerId && !userId && !adminId && <li>
            <Link href="/signin">
              <Button text="Signin" />
            </Link>
          </li>
        }

        {
          trainerId && <li>
            <button className={btnstyles.btn} onClick={signout}>Signout</button>
          </li>
        }
        {
          adminId && <li>
            <button className={btnstyles.btn} onClick={signout}>Signout</button>
          </li>
        }

      </ul>

    </nav>
  );
};

export default Navbar;
