import React from 'react';
import '../style/borderAnimation.css';
// import Milky from '../images/milky-rect.png';
import { Route, Redirect } from 'react-router-dom';

const BorderAnimation = function({projectURL}) {
    const getBorder = function () {
        return (
            <div className="rainbow" onClick={()=>comingSoon()}>
                <div className="sub-image-container"></div>
            </div>
        );
    }

    const comingSoon = function () {
        // alert('The project page is coming soon!');
        console.log(projectURL);
        <Redirect push to="/projects/mirror" />
    }


    return (
        <div className="border-container">
            {getBorder()}
        </div>
    )
};

export default BorderAnimation;