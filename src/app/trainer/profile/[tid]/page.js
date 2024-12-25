"use client";

import React, { useState, useEffect } from 'react'
import userprofilestyles from '../../../css/trainerprofile.module.css'
import fontstyles from '../../../css/fonts.module.css'
import ProfilePic from '../../../../../public/profile-pic.png'
import Image from 'next/image'
import Link from 'next/link'


import { FaMoneyBill } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdCloudUpload } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


import { useParams } from 'next/navigation';
import axios from 'axios'

const userprofile = () => {
    const { tid } = useParams();
    const [trainer, setTrainer] = useState({});
    const [trainerPic, setTrainerPic] = useState({});





    useEffect(() => {
        const getTrainer = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/trainer/${tid}`);
                setTrainer(response.data.trainer[0]);
                setTrainerPic(response.data.trainerPic[0]);
            } catch (error) {
                console.log(error);
            }
        }
        getTrainer();
    }, [tid]);
    return (
        <section className={userprofilestyles.userProfile}>
            <div className={userprofilestyles.info}>
                <div className={userprofilestyles.pic}>
                    <div className={userprofilestyles.profilePicContainer}>

                        <Image
                            src={trainerPic ? `/uploads/${trainerPic.pic}` : ProfilePic}
                            alt="Profile Picture"
                            className={userprofilestyles.profilePic}
                            width={200}
                            height={200}
                        />
                        {
                            !trainerPic ? (
                                <Link href={`/trainer/add-profile-pic/${tid}`}> <MdCloudUpload className={userprofilestyles.uploadIcon} /></Link>
                            ) : (
                                <Link href={`/trainer/edit-profile-pic/${tid}`}> <FaEdit className={userprofilestyles.uploadIcon} /></Link>
                            )
                        }


                    </div>
                    <div className={userprofilestyles.data}>
                        <h3 className={fontstyles.fontBold}>{trainer.name}</h3>
                        <p><FaPhoneAlt className={userprofilestyles.dataicon} /> {trainer.mobile_no}</p>
                        <p><FaMoneyBill className={userprofilestyles.dataicon} /> {trainer.email}</p>
                        <Link href={`/trainer/edit-profile/${tid}`} className={userprofilestyles.editLink}><FaEdit /> <span>Edit Profile</span></Link>

                    </div>
                </div>
                <div className={userprofilestyles.bio}>
                    <h3 className={fontstyles.fontBold}>Bio</h3>
                    <p>{trainer.bio}</p>
                </div>
            </div>

        </section>
    )
}

export default userprofile