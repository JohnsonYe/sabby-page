import React from 'react';
import ImageBackground from '../images/personal-image-min.jpg';
import '../style/about.css';
// import FullScreenImageContainer from '../components/FullScreenImageContainer';

const About = function() {
    const descriptions = [
        "Hello! My name is Sabrina and I am a product designer from Seattle, Washington. I graduated from California State University Fullerton with a Japanese/Linguistic Major. I was borned in XinJiang, China and immigrated to the U.S. when I was 11 years old. I always loved exploring different cultures, histories, and languages. In my free time, I like to travel, study ancient history and play with my two cats! (Mochi & Milky)",
        
        "Before my product design journey started, I was studying for my court interpreting certificates. One day while I was talking to a friend, he randomly mentioned product design. I went home and did some research about it, and then here I am! I became a product designer. I was miserable for a long time not knowing what to do, but now I am glad that I found product design as a career. I can not wait to become a strong designer who uses research and empathy to create easy to use and beautiful user experiences!",

        // "When I was taking the trial course of product design, I found it to be a nice, interesting, and easy job to do. But after joining an intense bootcamp, I know that I was wrong. Nothing is easy, especially when it comes to design. Iteration is almost everything. Since there are so many designers out there, I always wanted to design something cool and unique to stand out from others. But after learning what product designers really do, now I know the real good designs are the ones that really makes the users feel ease when using their design.",
    ]

    function generateDescription(text, index) {
        return (
            <div className="about-me" key={"about-me-"+index}>
                {text}
            </div>
        );
    }

    // function openImage() {
        
    // }

    return (
        <div className="about-container" id="container-id">
            <div className="about-section-1">
                <div className="about-image">
                    <img src={ImageBackground}/>
                </div>
                <div className="about-name">
                    {/* <div className="header-m">About Me</div> */}
                    <div className="header-xxl">About Sabrina</div>
                    <div className="header-detail">
                        <div className="header-s">Current location: Seattle, WA</div>
                        <div className="header-s">Mother of 2 lovely cats</div>
                        <div className="header-s">Fun fact: I am panti-lingual</div>
                    </div>
                </div>
            </div>

            <div className="about-section-2">
                <div className="about-description">
                    {descriptions.map((description, i) => { return generateDescription(description, i); })}
                </div>
            </div>
        </div>
    )
};

export default About;