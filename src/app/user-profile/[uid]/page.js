"use client";

import React, { useState, useEffect } from 'react'
import userprofilestyles from '../../css/userprofile.module.css'
import fontstyles from '../../css/fonts.module.css'
import ProfilePic from '../../../../public/profile-pic.png'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../components/button'
import { useParams } from 'next/navigation';

import { FaMoneyBill } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from 'axios';
import Swal from 'sweetalert2';

const UserProfile = () => {
    const { uid } = useParams();
    const [user, setUser] = useState({});
    const [userPic, setUserPic] = useState({});


    useEffect(() => {
        const getUser = async () => {
            try {
                // const response = await axios.get(`http://localhost:3000/api/user/${uid}`);
                const response = await axios.get(`https://fitforge-gym-website-using-next-js.onrender.com/api/user/${uid}`);
                setUser(response.data.user[0]);
                setUserPic(response.data.userPic[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, [uid]);




    return (
        <section className={userprofilestyles.userProfile}>
            <div className={userprofilestyles.info}>
                <div className={userprofilestyles.pic}>
                    <div className={userprofilestyles.profilePicContainer}>


                        <Image
                            src={ProfilePic}
                            alt="Profile Picture"
                            className={userprofilestyles.profilePic}
                            width={200}
                            height={200}
                        />
                        {/* <Image
                            src={userPic ? `/uploads/${userPic.pic}` : ProfilePic}
                            alt="Profile Picture"
                            className={userprofilestyles.profilePic}
                            width={200}
                            height={200}
                        /> */}

                        {/* {
                            !userPic ? (
                                <Link href={`/add-profile-pic/${uid}`}> <MdCloudUpload className={userprofilestyles.uploadIcon} /></Link>
                            ) : (
                                <Link href={`/edit-profile-pic/${uid}`}> <FaEdit className={userprofilestyles.uploadIcon} /></Link>
                            )
                        } */}




                    </div>
                    <div className={userprofilestyles.data}>
                        <h3 className={fontstyles.fontBold}>{user.name}</h3>
                        <p>
                            <FaPhoneAlt className={userprofilestyles.dataicon} />
                            {user.mobile_no}
                        </p>
                        <p>
                            <FaMoneyBill className={userprofilestyles.dataicon} />
                            {user.email}
                        </p>
                        <Link href={`/edit-profile/${uid}`} className={userprofilestyles.editLink}><FaEdit /> <span>Edit Profile</span></Link>
                    </div>
                </div>
                <div className={userprofilestyles.bio}>
                    <h3 className={fontstyles.fontBold}>Bio</h3>
                    <p>{user.bio}</p>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;
