import React, { useState } from "react";
import '../Styles/Navbar.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {

    const [showNavProfile, setShowNavProfile] = useState(false);

    const handleShowNavProfile = () => {
        setShowNavProfile(!showNavProfile)
    }

    return (
            <nav className="navbar">

                <div className="navBrand">
                    <h2>Tudo Technology</h2>
                </div>

                <div className="navContent">
                    <ul className="navItems">
                        <li className="navList">About Us</li>
                        <li className="navList">Our Programs</li>
                    </ul>

                    <div className="navProfile">
                        <div className="navImg" onClick={() => handleShowNavProfile()}>
                            <img src="/Images/Group 50.png" alt="Profile Logo" />
                        </div>

                        <ul className={showNavProfile? "profileControlCotainer showProfileControlCotainer " : "profileControlCotainer"}>
                            <li className="profileControls"> <NavLink className='navLink' to='/'>Dashboard</NavLink></li>
                            <li className="profileControls"> <NavLink className='navLink'>Bookmarks</NavLink></li>
                            <li className="profileControls"> <NavLink className='navLink' to='myAccount'>My Accoun</NavLink>t</li>
                            <li className="profileControls">Log Out</li>
                        </ul>
                    </div>
                </div>

            </nav>
    )
}

export default Navbar
