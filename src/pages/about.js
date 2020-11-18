import React from 'react';
import ImageBackground from '../images/personal-image-min.jpg';
import '../style/about.css';

const About = function() {
    const description_1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    const description_2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
    
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
                <div className="about-name header">
                    <div>Hello! My Name is</div>
                    <div>SABRINA SHOKRET</div>
                </div>
            </div>

            <div className="about-section-2">
                <div className="about-description">
                    {generateDescription(description_1)}
                    {generateDescription(description_2)}
                </div>
            </div>
        </div>
    )
};

export default About;