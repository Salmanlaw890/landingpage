import React from 'react'
import './Footer.css'
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="footer">
            <h1>Its time to <span style={{ color: "#3275db" }}>start</span> investing in yourself</h1>
            <img src="https://ezitech.org/wp-content/uploads/2023/03/8-3-1441x555-copy-1438x554.webp" alt="" />
            <div className="content">
                <div className="about">
                    <h1>ABOUT</h1>
                    <p>Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.</p>
                </div>
                <div className="popular_courses">
                    <h1>POPULAR COURSES</h1>
                    <div className="popular_content">
                        <div className="popular_text">
                            <img src="https://ezitech.org/wp-content/uploads/2022/10/What-is-a-digital-marketing-agency-75x75.webp" alt="" />
                            <div className="inner_text">
                                <h3>Definition for Digital Marketing</h3>
                                <p>By Ezitech</p>
                            </div>
                        </div>
                        <div className="popular_text">
                            <img src="https://ezitech.org/wp-content/uploads/2022/10/react-75x75.jpeg" alt="" />
                            <div className="inner_text">
                                <h3>Online Arbitrage mastermind 2.0</h3>
                                <p>By Husnain Ali</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pages">
                    <h1>PAGES</h1>
                    <ul className='ul'>
                        <li className='list'>CONTACT</li>
                        <li className='list'>SHOP</li>
                        <li className='list'>INTERNSHIP</li>
                        <li className='list'>CODELAB</li>
                    </ul>
                </div>
                <div className="contact_us">
                    <h1>CONTACT</h1>
                    <div className="content">
                        <div className="icon">
                            <FaPhone />  +92 3455555396
                        </div>
                    </div>
                    <div className="content">
                        <div className="icon">
                            <FaLocationDot />  Office #304-B Amna Plaza, Rawalpindi, Pakistan
                        </div>

                    </div>
                    <div className="content">
                        <div className="icon">
                            <MdOutlineEmail />  ibrahim@eziline.com
                        </div>

                    </div>
                </div>
            </div>
            <div className="copy">
                <p>Copyright © 2023 Eziline technologies | Design & Develop by <a style={{ color: "white" }} href="https://ezitech.org/">Eziline Software House</a></p>
            </div>
        </div>
    )
}
