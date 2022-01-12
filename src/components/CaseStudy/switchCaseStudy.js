import React from "react";
import { Link } from 'react-router-dom';
import '../../style/components/switchCaseStudy.css';
/**
 * 
 * @param {leftComponent, rightComponent}
 * {
 *  path: String
 *  name: String,
 * 
 * }
 *  
 */
export default function({leftComponent, rightComponent}) {

    function scrollToTop() {
        window.scrollTo(0, 0);
    }
    
    return (
        <div className="switchComponentContainer">
            <div className="switchComponentwrapper">
                <div className="leftComponentWrapper">
                    <Link to={leftComponent.path} className="leftSwitchComponent"  onClick={()=>scrollToTop()}>
                        <i className="fa fa-angle-left switchArrow" aria-hidden="true"></i>
                        <span className="switchComponentName">{leftComponent.name}</span>
                    </Link>
                </div>

                <div className="rightComponentWrapper">
                    <Link to={rightComponent.path} className="rightSwitchComponent" onClick={()=>scrollToTop()}>
                        <span className="switchComponentName">{rightComponent.name}</span>
                        <i className="fa fa-angle-right switchArrow" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
};