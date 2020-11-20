import React from 'react';
import '../style/borderAnimation.css';
// import Milky from '../images/milky-rect.png';

const BorderAnimation = function() {
    const getBorder = function () {
        return (
            // <div className="center">
            //     <button className="btn">
            //     <svg width="500px" height="250px" viewBox="0 0 500 250" className="border">
            //         <polyline points="499,1 499,249 1,249 1,1 499,1" className="bg-line"></polyline>
            //         <polyline points="499,1 499,249 1,249 1,1 499,1" className="hl-line"></polyline></svg>
            //         <span>HOVER ME</span>
            //     </button>
            // </div>

            // <div className="gradient-border" id="box">
            //         Project
            //         <br/>Image<br/>Container
            // </div>

            <div className="rainbow">
                <div className="sub-image-container"></div>
            </div>
        );
    }

    return (
        <div className="border-container">
            {getBorder()}
        </div>
    )
};

export default BorderAnimation;