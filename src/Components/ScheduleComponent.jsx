import React from 'react'
import SectionTitle from './SectionTitle'
import '../Styles/ScheduleComponent.css'

const ScheduleComponent = () => {
    return (
        <section id='schedule' className='main'>
            <SectionTitle
                heading2='Schedule'
            />

            <div className="scheduleContainer">

                <div className="scheduleImage">
                    <div className="eclipse">
                        <img src="/Images/Ellipse 19 (1).png" alt="eclipse" />

                        <div className="instructor">
                            <img src="/Images/FullBody.png" alt="instructor" />
                        </div>
                        <div className="instructorHead">
                            <img src="/Images/HeadOnly.png" alt="instructorHead" />
                        </div>
                    </div>

                    <div className="curvedRowContainer">
                        <div className="curvedRow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="430" height="264" viewBox="0 0 430 264" fill="none">
                                <path opacity="0.5" d="M428.958 189.384C393.225 225.117 347.524 249.212 297.852 258.507C248.181 267.802 196.859 261.863 150.623 241.469C104.387 221.075 65.3974 187.178 38.7703 144.229C12.1432 101.279 -0.876922 51.2825 1.4187 0.800659" stroke="#4D4D4D" />
                            </svg>

                            <div className="rowCircle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                                    <ellipse cx="31.0928" cy="31.3789" rx="30.7884" ry="30.4707" fill="url(#paint0_linear_201_678)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_201_678" x1="0.304443" y1="31.3789" x2="65.3814" y2="31.5987" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F24397" />
                                            <stop offset="1" stop-color="#F64C3B" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="scheduleDetails">
                    <div className="scheduleHead">
                        <h2>Day 1 - Class</h2>
                        <img src="/Images/Group 267.svg" alt="" />
                    </div>

                    <div className="scheduleBox">
                        <div className="weakContainer">
                            <h5>Week 1</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="#4D4D4D">
                                <path d="M8.56767 11.8953C7.86172 13.4725 5.62266 13.4725 4.9167 11.8953L1.07487 3.31187C0.482671 1.98877 1.45078 0.494802 2.90036 0.494802L10.584 0.494802C12.0336 0.494802 13.0017 1.98877 12.4095 3.31187L8.56767 11.8953Z" fill="#4D4D4D" />
                            </svg>
                        </div>
                    </div>

                    <div className="scheduleDescription">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Join Today</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ScheduleComponent
