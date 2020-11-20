import React from 'react';
import '../style/borderAnimation.css';
// import Milky from '../images/milky-rect.png';

const BorderAnimation = function() {
    const getBorder = function () {
        return (
            <div className="rainbow" onClick={()=>comingSoon()}>
                <div className="sub-image-container"></div>
            </div>
        );
    }

    const comingSoon = function () {
        alert('The project page is coming soon!');
    }


    return (
        <div className="border-container">
            {getBorder()}
        </div>
    )
};

export default BorderAnimation;