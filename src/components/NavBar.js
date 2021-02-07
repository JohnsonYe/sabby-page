// import React, { useState } from "react";
import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import '../style/navbar.css';
import brandLogo from '../images/name_logo.png';
import brandLogoBlack from '../images/nameLogoBlack.png';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            logo: window.location.pathname === '/' ? brandLogo : brandLogoBlack,
            NavFont: window.location.pathname === '/' ? '#ffffff' : '#000000',
            ballTop: window.location.pathname === '/' ? 'calc(110vh + ' : 'calc(',
            ballRatio: window.location.pathname === '/' ? 200 : 100,
            ballNumber: 60,
            isMobile: window.innerWidth <= 760 ? true : false,
            showMenu: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.toggleMenu();
            if (this.props.location.pathname == '/') {
                this.setState({
                    logo: brandLogo,
                    NavFont: '#ffffff',
                    ballTop: 'calc(110vh + ',
                    ballRatio: 200
                });
            } else if (this.props.location.pathname == '/projects/the-product-designer') {
                this.setState({
                    logo: brandLogo,
                    NavFont: '#ffffff'
                });
            }else {
                this.setState({
                    logo: brandLogoBlack,
                    NavFont: '#000000',
                    ballTop: 'calc(',
                    ballRatio: 100
                });
            }
            
            var actionThis = this;
            setTimeout(function() {
                for (var i = 0; i < 60; i++) {
                    actionThis.removeBall(i);
                }
                if (!window.location.pathname.includes("/projects")) {
                    actionThis.addBalls();
                }
            }, 50);
        }

    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    resize() {
        if (window.innerWidth <= 760) {
            this.setState({isMobile: true});
        } else {
            this.setState({isMobile: false});
        }
    }

    removeBall(index) {
        let ball = document.getElementById(`ball_${index}`);
        if (ball) {
            ball.parentNode.removeChild(ball);
        }
        
    }

    addBalls(ele_id) {
        switch (this.props.location.pathname) {
            case '/':
                ele_id = "home-container-id";
                break;
            case '/about':
            case '/contact':
            case '/resume':
                ele_id = 'container-id'
                break
        }
        const colors = ["#FED2CF", "#F1CEFE", "#BEFFEF", "#B2E8FF", "#F9F6B0"];
        const balls = [];
        for (let i = 0; i < this.state.ballNumber; i++) {
            let ball = document.createElement("div");
            ball.classList.add("ball");
            ball.setAttribute('id', `ball_${i}`);
            ball.setAttribute('ref', 'balRef');
            ball.style.background = colors[Math.floor(Math.random() * colors.length)];
            ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
            ball.style.top = `${this.state.ballTop}${Math.floor(Math.random() * this.state.ballRatio)}vh)`;
            ball.style.transform = `scale(${Math.random()})`;
            ball.style.width = `${Math.random()}em`;
            ball.style.height = ball.style.width;
            
            balls.push(ball);
            // document.body.append(ball);
            document.getElementById(ele_id).append(ball);
        }

        // Keyframes
        balls.forEach((el, i, ra) => {
            let to = { x: Math.random() * (i % 2 === 0 ? -11 : 11), y: Math.random() * 12 };
            let anim = el.animate(
                [ { transform: "translate(0, 0)" }, { transform: `translate(${to.x}rem, ${to.y}rem)` } ],
                {
                duration: (Math.random() + 1) * 2000, // random duration
                direction: "alternate",
                fill: "both",
                iterations: Infinity,
                easing: "ease-in-out"
                }
            );
        });
    }

    toggleMenu() {
        this.setState({showMenu: !this.state.showMenu});
    }

    render() {
        var prevScrollpos = window.pageYOffset;
        var $this = this;
        window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (window.location.pathname === '/' || window.location.pathname === '/projects/the-product-designer') {
                    if (currentScrollPos <= 700) {
                        $this.setState({ logo: brandLogo, NavFont: '#ffffff' });
                    } else {
                        $this.setState({logo: brandLogoBlack, NavFont: '#000000', });
                    }
                }

                if (prevScrollpos > currentScrollPos || currentScrollPos === prevScrollpos) {
                    document.getElementsByClassName("app-header")[0].style.top = "0";
                    
                } else {
                    // document.getElementsByClassName("app-header")[0].style.top = "-100px";
                }
                prevScrollpos = currentScrollPos;
        }

        document.addEventListener('DOMContentLoaded', (event) => {
            // console.log(window.location.pathname);
            if (!window.location.pathname.includes("/projects")) {
                this.addBalls();
            }
        });

        let bugerColor ={
            backgroundColor: this.state.showMenu ? 'black' : 'white'
        }

        return (
            <header className="app-header bgColor-main"> 
                <div className="nav-link nav-logo">
                    {/* <Link to={'/'} className="nav-link" onClick={()=> routeOnClick('home')}> */}
                    <Link to={'/'} className="nav-link">
                        <img src={this.state.logo} className="logo-image"></img>
                    </Link>
                </div>

                <div className="buger_container" style={{ display: this.state.isMobile ? 'block' : 'none'}} onClick={() => this.toggleMenu()}>
                    <div className="hambuger" style={bugerColor}></div>
                    <div className="hambuger" style={bugerColor}></div>
                    <div className="hambuger" style={bugerColor}></div>
                </div>

                <nav className="navbar" style={{color: this.state.NavFont, display: this.state.isMobile && !this.state.showMenu ? 'none': 'block'}}>
                    {/* <NavLink exact to={'/about'} className="navbar-link about" onClick={()=> routeOnClick('about')}>ABOUT</NavLink>
                    <NavLink exact to={'/resume'} className="navbar-link resume" onClick={()=> routeOnClick('resume')}>RESUME</NavLink>
                    <NavLink exact to={'/contact'} className="navbar-link contact" onClick={()=> routeOnClick('contact')}>CONTACT</NavLink> */}
                    <NavLink exact to={'/about'} className="navbar-link about">ABOUT</NavLink>
                    <NavLink exact to={'/resume'} className="navbar-link resume">RESUME</NavLink>
                    <NavLink exact to={'/contact'} className="navbar-link contact">CONTACT</NavLink>
                </nav>
            </header>
        )
    }
}

// export default NavBar;
export default withRouter(props => <NavBar {...props} />);