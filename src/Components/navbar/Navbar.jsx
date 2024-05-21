import React from "react";
import "../navbar/Navbar.css"
import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav">
             <Link to="/" className="link"> Home </Link>
             <Link to="/About" className="link">About Me</Link>
             <Link to="/Projects/project1" className="link">My Projects</Link>
             <Link to="/Contact" className="link">Contact Me</Link>
        </div>     
    )
}


export default Navbar