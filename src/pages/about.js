import React from 'react';
import ImageBackground from '../images/personal-image-min.jpg';
import '../style/about.css';

const About = function() {
    const descriptions = [
        "Hello! My name is Sabrina and I am a UX designer from San Diego, California. I graduated from California State University Fullerton with a Japanese/Linguistic Major. Before my UX journey started, I was studying for my court interpreting certificates. One day while I was talking to a friend, he randomly mentioned UX design. I went home and did some research about what UX is, and then here I am! I became a UX designer.",
        "When I was taking the trial course of UX design, I found it to be a nice, interesting, and easy job to do. But after joining an intense bootcamp, I know that I was wrong. Nothing is easy, especially when it comes to design. Iteration is almost everything. Since there are so many designers out there, I always wanted to design something cool and unique to stand out from others. But after learning what UX designers really do, now I know the real good designs are the ones that really makes the users feel ease when using their design.",
        "I was miserable for a long time not knowing what to do, but now I am glad that I found UX design as a career. I can not wait to become a strong designer who uses research and empathy to create easy to use and beautiful user experiences!"
    ]

    function generateDescription(text) {
        return (
            <div className="about-me">
                {text}
            </div>
        );
    }

    return (
        <div className="about-container">
            <div className="about-section-1">
                <div className="about-image">
                    <img src={ImageBackground}/>
                </div>
                <div className="about-name">
                    <div className="header-m">Hello! My Name is</div>
                    <div className="header">SABRINA SHOKRET</div>
                </div>
            </div>

            <div className="about-section-2">
                <div className="about-description">
                    {descriptions.map(description => { return generateDescription(description); })}
                </div>
            </div>
        </div>
    )
};

export default About;