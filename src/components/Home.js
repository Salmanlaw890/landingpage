import React from 'react'
import Navbar from './Navbar'
import './Home.css';
import { FaRegHeart } from "react-icons/fa";
import { useTypewriter } from 'react-simple-typewriter'

import Recommended from './Recommended';
import Trends from './Trends';
import Bottom from './Bottom';
import Footer from './Footer';

export default function Home() {

    const [text] = useTypewriter({
        words: ['Web design', 'Programming', 'Social Skills', 'Marketing'],
        loop: true
    })
    return (
        <>
            <div className="Home">
                <Navbar />
                <div className="banner-fadebtn"></div>
                <div className="top_box">
                    <div className="top_content">
                        <h1>Learn The Fundamentals With Our Experts In <span style={{ color: "red" }}>{text}</span></h1>
                        <p>Utilize Effective Training to react Your Potential!</p>
                        <div className="input_field">
                            <input type="search" placeholder="Search courses..." class="search-input"></input>
                        </div>
                        <div className="last_banner_text">
                            <p>Explore Our Most Useful Products</p>
                            <a href="https://ezicoding.com/"><FaRegHeart /></a>
                        </div>
                        <div className="image_box">
                            <a href="https://eziblogs.com/"><img className='images_1' src="//ezitech.org/wp-content/uploads/2023/10/EZIBLOGS-DG.png" alt="img_1" /></a>

                            <a href="https://ezicoding.com/"><img className='images_2' src="//ezitech.org/wp-content/uploads/2023/11/white-ezipos.png" alt="img_2" /></a>

                            <a href="https://pos.ezitech.org/?_gl=1%2A45eo19%2A_ga%2AMTU5MTYzNDk1MC4xNzAwNjM5MTI3%2A_ga_2XEX0EBCTP%2AMTcwMDY4MDE3OC42LjEuMTcwMDY4MjgyMS4wLjAuMA..&_ga=2.13773360.648575676.1700639129-1591634950.1700639127"><img className='images_3' src="///ezitech.org/wp-content/uploads/2023/10/white-lgooo-01.png" alt="img_3" /></a>


                        </div>
                    </div>
                </div>
            </div>
            {/* after banner */}
            <div className="after_banner_content">
                <div className="services">
                    <h1>Best IT Services Award 2023</h1>
                    <div className="achievement_content">
                       <div> <img className='image_person' src="https://ezitech.org/wp-content/uploads/2023/03/Screenshot-2023-03-02-at-11.57.27-AM-1-486x562.png" alt="img" width={200} height={300} /></div>
                        <div className="paragraphs">
                            <p><b>Ezitech Is affiliated With <span style={{ color: "blue" }}>Eziline Software House.</span></b> Eziline has been awarded the prestigious Best Software House in IT sector award by the President of Pakistan. This is an incredible achievement and a testament to the hard work and dedication of the entire team at Eziline Software House. The award is a great recognition of the company’s achievements in the field of IT and serves as a major milestone in its journey towards success.</p>
                            <p>This award is a huge source of motivation and inspiration for the entire team at Eziline Software House. <b>It is a validation of the company’s commitment to innovation, excellence, and customer satisfaction.</b> The award acknowledges the hard work and dedication of every member of the team who has contributed to the success of the company.</p>
                            <p><b>Ismail Shah, the CEO of Eziline Software House Pvt Ltd</b>, received the Best Services Award in the IT sector from the <b>President of Pakistan, Dr. Arif Alvi</b>, in recognition of his remarkable contributions to the country’s technology industry.</p>
                            <button>Eziline Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* How it Works */}
            <div className="how_it_works">
                <p>How It Works?</p>
                <div className="all_content">
                    <div className="contents">
                        <img src="https://cdni.iconscout.com/illustration/free/thumb/free-sign-up-form-4575543-3798675.png" alt="img" />
                        <h5>Sign up</h5>
                        <p>Enter your name, email, and contact details to get started. It truly is that simple!</p>
                    </div>

                    <div className="contents">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/student-choosing-course-tutor-4373379-3626448.png" alt="img" />
                        <h5>Select Course</h5>
                        <p>Browse our extensive and ever-expanding variety of courses for professional development.</p>
                    </div>

                    <div className="contents">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/001-teacher.svg/512px-001-teacher.svg.png" alt="img" />
                        <h5>Start Learning</h5>
                        <p>Do the tasks, and your teacher will evaluate them before providing you with thorough</p>
                    </div>
                </div>
            </div>
            {/* trends */}
            <div className="trend_container">
                <h6>What new trends and technology will you discover?</h6>
                <p>Today's technology is developing quickly, and our new technological trends are enabling and advancing, speeding up the pace of development.</p>

                <div className="cards">
                    <div className="card">
                        <a href="https://ezitech.org/courses-ezitech/?terms%5B%5D=57&category%5B%5D=57"> <img src="https://ezitech.org/wp-content/uploads/2022/05/artificial-intelligence-3-69x69.png" alt="img" /></a>
                        <h5>ML & AI</h5>
                    </div>

                    <div className="card">
                        <a href="https://ezitech.org/courses-ezitech/?terms%5B%5D=59&category%5B%5D=59"> <img src="https://ezitech.org/wp-content/uploads/2022/05/blockchain-69x69.png" alt="" /></a>
                        <h5>Block Chain</h5>
                    </div>

                    <div className="card">
                        <a href="https://ezitech.org/courses-ezitech/?terms%5B%5D=60&category%5B%5D=60"> <img src="https://ezitech.org/wp-content/uploads/2022/05/aaaa-69x69.png" alt="" /></a>
                        <h5>Amazon</h5>
                    </div>

                    <div className="card">
                        <a href="https://ezitech.org/courses-ezitech/?terms%5B%5D=61&category%5B%5D=61"> <img src="https://ezitech.org/wp-content/uploads/2022/05/cccccc-69x69.png" alt="" /></a>
                        <h5>Cyber Security</h5>
                    </div>

                    <div className="card">
                        <a href="https://ezitech.org/courses-ezitech/?terms%5B%5D=63&category%5B%5D=63"> <img src="https://ezitech.org/wp-content/uploads/2022/05/ffff-69x69.png" alt="" /></a>
                        <h5>Development</h5>
                    </div>

                    <div className="card">
                        <a href="https://ezitech.org/courses-ezitech/?terms%5B%5D=64&category%5B%5D=64"> <img src="https://ezitech.org/wp-content/uploads/2022/05/www-69x69.png" alt="" /></a>
                        <h5>Designing</h5>
                    </div>

                    <div className="card">
                        <a href="https://ezitech.org/courses-ezitech/?terms%5B%5D=65&category%5B%5D=65"> <img src="https://ezitech.org/wp-content/uploads/2022/05/vvvv-69x69.png" alt="" /></a>
                        <h5>Gaming</h5>
                    </div>

                    <div className="card">
                        <a href="https://ezitech.org/courses-ezitech/?terms%5B%5D=66&category%5B%5D=66"> <img src="https://ezitech.org/wp-content/uploads/2022/05/ssss-69x69.png" alt="" /></a>
                        <h5>Architecture</h5>
                    </div>

                    <div className="card">
                        <a href="https://ezitech.org/courses-ezitech/?terms%5B%5D=67&category%5B%5D=67"> <img src="https://ezitech.org/wp-content/uploads/2022/05/aaaaaaaaaaaaaaaaaaaaaa-69x69.png" alt="" /></a>
                        <h5>IOS & AND</h5>
                    </div>

                    <div className="card">
                        <a href="https://ezitech.org/courses-ezitech/?terms%5B%5D=68&category%5B%5D=68"> <img src="https://ezitech.org/wp-content/uploads/2022/10/social-media-1-63x63.png" alt="" /></a>
                        <h5>Marketing</h5>
                    </div>

                    <div className="card">
                        <a href="https://ezitech.org/courses-ezitech/?terms%5B%5D=106&category%5B%5D=106"> <img src="https://ezitech.org/wp-content/uploads/2023/03/3d-68x68.png" alt="" /></a>
                        <h5>3D</h5>
                    </div>

                    <div className="card">
                        <a href="https://ezitech.org/courses-ezitech/?terms%5B%5D=107&category%5B%5D=107"> <img src="https://ezitech.org/wp-content/uploads/2023/03/animation-68x68.png" alt="" /></a>
                        <h5>Animation</h5>
                    </div>
                </div>
            </div>
            <Recommended />
            <Trends />
            <Bottom />
            <Footer />
        </>
    )
}
