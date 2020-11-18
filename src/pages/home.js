import React from 'react';
import '../style/home.css';
import PersonalImage from '../images/personal-image-1.jpg';
const Home = function() {
    const getBorder = function () {
        return (
            <div className="container-border">
                {/* <svg width="650px" height="350px" viewBox="0 0 650 350" class="border">
                    <polyline points="649,1 649,349 1,349 1,1, 649,1" class="bg-line" />
                    <polyline points="1,1 649,1 649,349 1,349 1,1" class="hl-line" />
                </svg> */}
                <div className="sub-border-1"></div>
                <div className="sub-border-2"></div>
            </div>
        );
    }

    const generateProject = function (title, descrption) {
        return (
            <div className="class-info">
                <div className="project-title">{title}</div>
                <div className="project-description">{descrption}</div>
                <a href="https://www.google.com">view Case Study</a>
            </div>
        );
    }
    const mirrorText = "A line to describe the project or two lines is fine too. A line to describe the project or two lines is fine too.";

    return (
        <div className="home-container">
            <div className="introduction-container">
                <div className="image-section">
                    {/* <img className="personal-image" src={ImageBackground} /> */}
                    <img className="personal-image" src={PersonalImage} />
                </div>
                <div className="intro-section header">
                    <div className="intro-title">HELLO I AM SABRINA</div>
                    <br/>
                    <div className="intro-description header">
                        <div>I Create Friendly Experience</div>
                        <div>For People Like</div>
                        <div><b><i>You</i></b> & <b><i>Me</i></b></div>
                    </div>
                </div>
            </div>

            <div className="project-list">
                <div className="project-item">
                    <div className="left">
                        {getBorder()}
                    </div>
                    <div className="right">
                        {generateProject('Mirror', mirrorText)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;