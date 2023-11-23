import React from 'react'
import "./Recommended.css"
import { FaRegEye, FaRegClock } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export default function Recommended() {
    return (
        <div className="recommended">
            <h6>Recommended Courses</h6>
            <div className="cards_2">
                <div className="card_2">
                    <img src="https://ezitech.org/wp-content/uploads/2023/07/DartProgramming-aptlearn-300x225.webp" alt="img" />
                    <h6>IOS & AND</h6>
                    <h5>Flutter & Dart - The Complete Course With Projects</h5>
                    <div className="gray">
                        <div className="icon"><FaRegClock /></div>
                        <p>3 Months</p>
                        <div className="icon_2"><FaRegEye /></div>
                        <p>7861</p>
                    </div>
                    <div className="stars">
                        <div className="star_icon">
                            <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                            0.0
                        </div>
                        <p>PKR25,000</p>
                    </div>
                </div>

                <div className="card_2">
                    <img src="https://ezitech.org/wp-content/uploads/2023/07/5167842_cafe-300x225.webp" alt="img" />
                    <h6>Designing</h6>
                    <h5>Adobe Illustrator Course With Projects</h5>
                    <div className="gray">
                        <div className="icon"><FaRegClock /></div>
                        <p>3 Months</p>
                        <div className="icon_2"><FaRegEye /></div>
                        <p>7861</p>
                    </div>
                    <div className="stars">
                        <div className="star_icon">
                            <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                            0.0
                        </div>
                        <p>PKR25,000</p>
                    </div>
                </div>

                <div className="card_2">
                    <img src="https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-300x225.png" alt="img" />
                    <h6>Amazon</h6>
                    <h5>Online Arbitrage Mastermind 2.0 [Resell Products from Home]</h5>
                    <div className="gray">
                        <div className="icon"><FaRegClock /></div>
                        <p>3 Months</p>
                        <div className="icon_2"><FaRegEye /></div>
                        <p>7861</p>
                    </div>
                    <div className="stars">
                        <div className="star_icon">
                            <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                            0.0
                        </div>
                        <p>PKR25,000</p>
                    </div>
                </div>

                <div className="card_2">
                    <img src="https://ezitech.org/wp-content/uploads/2023/07/FrontEnd-870x440-1-300x225.webp" alt="img" />
                    <h6>Web Development</h6>
                    <h5>Front-End Course With Projects</h5>
                    <div className="gray">
                        <div className="icon"><FaRegClock /></div>
                        <p>3 Months</p>
                        <div className="icon_2"><FaRegEye /></div>
                        <p>7861</p>
                    </div>
                    <div className="stars">
                        <div className="star_icon">
                            <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                            0.0
                        </div>
                        <p>PKR25,000</p>
                    </div>
                </div>

                <div className="card_2">
                    <img src="https://ezitech.org/wp-content/uploads/2023/07/photoshop-course-300x225.png" alt="img" />
                    <h6>Designing</h6>
                    <h5>Adobe Photoshop Course</h5>
                    <div className="gray">
                        <div className="icon"><FaRegClock /></div>
                        <p>3 Months</p>
                        <div className="icon_2"><FaRegEye /></div>
                        <p>7861</p>
                    </div>
                    <div className="stars">
                        <div className="star_icon">
                            <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                            0.0
                        </div>
                        <p>PKR25,000</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
