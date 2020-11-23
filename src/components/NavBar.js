import React from "react";
import { Link, NavLink } from 'react-router-dom';
import '../style/navbar.css';
import brandLogo from '../images/logo.png';
const NavBar = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        if (window.location.pathname === "/projects/mirror") {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementsByClassName("app-header")[0].style.top = "0";
            } else {
                document.getElementsByClassName("app-header")[0].style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
    return (
        <header className="app-header bgColor-main"> 
            <div className="nav-link nav-logo">
                <Link to={'/'} className="nav-link">
                    <img src={brandLogo} className="logo-image"></img>
                </Link>
            </div>
            <nav className="navbar">
                <NavLink exact to={'/about'} className="navbar-link about">ABOUT</NavLink>
                <NavLink exact to={'/projects'} className="navbar-link projects">PROJECTS</NavLink>
                <NavLink exact to={'/resume'} className="navbar-link resume">RESUME</NavLink>
                <NavLink exact to={'/contact'} className="navbar-link contact">CONTACT</NavLink>
            </nav>
        </header>
    )
}

export default NavBar;