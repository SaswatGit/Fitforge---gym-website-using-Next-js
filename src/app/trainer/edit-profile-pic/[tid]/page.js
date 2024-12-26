"use client";

import React, { useState } from 'react'
import profilePicStyles from '../../../css/profilepic.module.css';
import btnstyles from '../../../css/button.module.css';
import { MdCloudUpload } from "react-icons/md";
import ProfilePic from '../../../../../public/profile-pic.png'
import Image from 'next/image';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams } from 'next/navigation';



const AddProfilePic = () => {
    const { tid } = useParams();
    const [userPic, setUserPic] = useState({});
    const [profilePicUrl, setProfilePicUrl] = useState("");

    const handleProfilePicChange = (e) => {
        setProfilePicUrl(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("profilePicInput", e.target.profilePicInput.files[0]);
        try {
            const response = await axios.put(`https://fitforge-gym-website-using-next-js.onrender.com/api/trainer/uploadpic/${tid}`, formData);
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: response.data.message,
                    confirmButtonText: 'OK',
                    showCancelButton: false
                }).then(() => {
                    window.location.href = `/trainer/profile/${tid}`;
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.data.message,
                    confirmButtonText: 'OK',
                    showCancelButton: false
                })
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                confirmButtonText: 'OK',
                showCancelButton: false
            })
        }
    }


    return (
        <section className={profilePicStyles.profilepicSection}>
            <div className={profilePicStyles.profilePicContainer}>

                <Image
                    src={profilePicUrl ? profilePicUrl : ProfilePic}
                    alt="Profile Picture"
                    className={profilePicStyles.profilePic}
                    width={200}
                    height={200}
                />

            </div>
            <form onSubmit={handleSubmit}>

                <input type="file" id="profilePicInput" name="profilePicInput" onChange={handleProfilePicChange} required />
                {
                    !profilePicUrl ? (
                        <label htmlFor='profilePicInput' className={profilePicStyles.uploadLabel}>
                            <MdCloudUpload className={profilePicStyles.uploadIcon} />
                            <span>Select Image</span>
                        </label>
                    ) : (
                        <button type='submit' className={btnstyles.btn}>Save</button>

                    )
                }
            </form>
        </section>
    )
}

export default AddProfilePic