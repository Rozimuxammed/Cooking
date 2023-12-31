import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiSun } from "react-icons/hi2";
import { BsMoon } from "react-icons/bs";
import { IoIosExit } from "react-icons/io";
import { projectAuth } from '../../firebase/confij';

function Navbar({ setUser, user, mode, setMode }) {
    const [icon, seticon] = useState(true)
    const changemode = () => {
        setMode(!mode)
        seticon(!icon)
    }
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <NavLink to={"/"}><h1>My Account</h1></NavLink>
                </div>
                <div className="links">
                    {user && <p>Hello {user.displayName}</p>}
                    {icon ? <HiSun onClick={changemode} className='mode' /> : <BsMoon onClick={changemode} className='mode' />}
                    {!user ? <NavLink to={"/login"}> <p>Login</p></NavLink> : <button onClick={() => {
                        projectAuth.signOut()
                        setUser(null)
                    }} className='logout'>Log Out <IoIosExit className='log' /> </button>}
                    {!user ? <span></span> : ""}
                    {!user ? <NavLink to={"/signup"}> <p>Sign Up</p></NavLink> : ""}
                </div>
            </div>
        </nav>
    )
}

export default Navbar