import React from 'react';
import '../style/borderAnimation.css';
// import Milky from '../images/milky-rect.png';

const BorderAnimation = function({bg_image}) {
    const getBorder = function () {
        return (
            <div className="rainbow">
                {/* <div className="sub-image-container" style={{backgroundImage: `url(${bg_image})`}}></div> */}
                <div className="sub-image-container">
                    <img src={bg_image}></img>
                </div>
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