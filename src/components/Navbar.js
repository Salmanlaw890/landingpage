import React, { useState } from 'react'
import "./Nav.css"
import { FaPhone, FaRegClock, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaUser, FaRegHeart, FaSearch } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('HOME');
    const [isDropdown, setDropdown] = useState(false);
    const [issecondDrop, setSecondDrop] = useState(false)
    const [isThirdDrop, setThirdDrop] = useState(false)

    // function
    const handleClick = (link) => {
        setActiveLink(link)
    };
    const handleMouseEnter = () => {
        setDropdown(true);

    };

    const handleMouseLeave = () => {
        setDropdown(false);

    };
    // second drop down
    const handleEnterSecond = () => {


        setSecondDrop(true)
    };

    const handleLeaveSecond = () => {
        setSecondDrop(false)

    };
    // 3rd drop down
    const handleEnterThird = () => {
        setThirdDrop(true)

    };

    const handleLeaveThird = () => {


        setThirdDrop(false)
    };

    return (
        <div className="container">
            <div className="top_header">
                <div className="content_box">
                    <div className="content">
                        <div className="icon">
                            <FaPhone />
                        </div>
                        <div className="text">
                            +92 3455555396
                        </div>
                    </div>
                    <div className="content">
                        <div className="icon">
                            <FaLocationDot />
                        </div>
                        <div className="text">
                            Office #304-B Amna Plaza, Rawalpindi, Pakistan
                        </div>
                    </div>
                    <div className="content">
                        <div className="icon">
                            <FaRegClock />
                        </div>
                        <div className="text">
                            Mon - Fri 8.00 - 20.00
                        </div>
                    </div>
                    <div className="content">

                        <div className="icon"><FaFacebook /></div>
                        <div className="icon"><FaInstagram /></div>
                        <div className="icon"><FaLinkedin /></div>
                        <div className="icon"><FaYoutube /></div>
                    </div>
                    <div className="content">
                        <div className="icon_user">
                            <a href="https://ezitech.org/user-account/"><FaUser /></a>
                        </div>
                        <div className="text">
                            <div className="user">
                                <a href="https://ezitech.org/user-account/"><span className="user_text">Login</span></a>
                                <span className="user_text">|</span>
                                <a href="https://ezitech.org/user-account/"><span className="user_text">Register</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* last */}
            <div className="last_header">
                <div className="logo">
                    <a href="http://ezitech.org/">
                        <img src="http://ezitech.org/wp-content/uploads/2023/02/EZITECH-LOGO-white.png" alt="logos" style={{ width: 0 }} />
                        <img className="img-responsive logo_colored_fixed hidden" src="http://ezitech.org/wp-content/uploads/2023/02/EZITECH-LOGO-1.png" alt="Ezitech" style={{ width: 170 }} />
                    </a>
                </div>
                <div className="nav_links">
                    <a className={activeLink === 'HOME' ? "active" : ""} href="/" onClick={() => handleClick('HOME')}>HOME</a>

                    <a className={activeLink === 'ABOUT US' ? "active" : ""} href="https://ezitech.org/about-ezitech/" onClick={() => handleClick('ABOUT US')}>ABOUT US</a>

                    <a style={{ position: 'relative', paddingBottom: "150px" }} className={activeLink === 'CERTIFICATION' ? "active" : ""} href="https://ezitech.org/certifications/" onClick={() => handleClick('CERTIFICATION')} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>CERTIFICATION
                        {/* dropdown */}
                        {isDropdown && (<div className="drop_down_1">
                            <a href="https://ezitech.org/course/free-courses/">Free Courses</a>
                            <a href="https://ezitech.org/course/onsite-courses-for-it-freelancing/">Online Courses</a>
                        </div>)}</a>

                    <a className={activeLink === 'INTERNSHIPS' ? "active" : ""} href="https://ezitech.org/internship-program/" onClick={() => handleClick('INTERNSHIPS')}>INTERNSHIPS</a>

                    <a style={{ position: 'relative', paddingBottom: "150px" }} className={activeLink === 'EZI UPDATES' ? "active" : ""} href="https://ezitech.org/ezi-updates/" onClick={() => handleClick('EZI UPDATES')} onMouseEnter={handleEnterSecond}
                        onMouseLeave={handleLeaveSecond}>EZI UPDATES
                        {/* dropdown 2*/}
                        {issecondDrop && (<div className="drop_down_2">
                            <a href="https://ezitech.org/seminars/">Seminar</a>
                            <a href="https://eziblogs.com/">News & Updates</a>
                        </div>)}
                    </a>

                    <a style={{ position: 'relative', paddingBottom: "150px" }} className={activeLink === 'BONUS' ? "active" : ""} href="/" onClick={() => handleClick('BONUS')} onMouseEnter={handleEnterThird}
                        onMouseLeave={handleLeaveThird}>BONUS
                        {/* dropdown 3 */}
                        {isThirdDrop && (<div className="drop_down_2">
                            <a href="https://ezitech.org/skill-assignments/">Skill Assignment</a>

                        </div>)}
                    </a>

                    <a className={activeLink === 'LOGIN' ? "active" : ""} href="https://ezitech.org/login/" onClick={() => handleClick('LOGIN')}>LOGIN</a>

                </div>
                <div className="search">
                    <span>|</span>
                    <a href="/https://ezitech.org/user-account/"><FaRegHeart /></a>
                    <div className="icon"><FaSearch /></div>
                </div>
            </div>
        </div>
    )
}
