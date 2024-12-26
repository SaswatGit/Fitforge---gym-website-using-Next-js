'use client';

import React, { useState, useEffect } from 'react';
import formstyles from '../../../css/formpage.module.css';
import fontstyles from '../../../css/fonts.module.css';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
import Button from '../../../components/button';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

const EditProfile = () => {
    const { tid } = useParams();
    const router = useRouter();
    const [trainer, setTrainer] = useState(null);

    useEffect(() => {
        const getTrainer = async () => {
            try {
                const response = await axios.get(`${process.env.ROOT_URL}/api/trainer/${tid}`);
                setTrainer(response.data.trainer[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getTrainer();
    }, [tid]);


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setTrainer({
            ...trainer,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`http://localhost:3000/api/trainer/${tid}`, trainer);
        console.log(response.data);
        if (response.data.success) {
            Swal.fire({
                title: 'Success',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'OK',
                showCancelButton: false,
            }).then(() => {
                router.push('/trainer/signin');
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
                    Edit Your{' '}
                    <span className={`${fontstyles.fontBold} ${formstyles.imp}`}>Profile</span>
                </h2>
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
                            value={trainer ? trainer.name : ""}
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
                            value={trainer ? trainer.email : ""}
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
                            value={trainer ? trainer.mobile_no : ""}
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
                            placeholder="Enter your new Password"
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
                            placeholder="Renter your new Password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={formstyles.formGroup}>
                        <label htmlFor="bio" className={formstyles.label}>
                            Bio
                        </label>
                        <textarea
                            className={formstyles.input}
                            id="bio"
                            name="bio"
                            placeholder="Enter bio"
                            value={trainer ? trainer.bio : ""}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <Button text="Update" />
                </form>
            </div>
        </section>
    );
};

export default dynamic(() => Promise.resolve(EditProfile), { ssr: false });
