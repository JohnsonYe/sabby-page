
import React from "react";
import ClickableImage from './clickableImage';
export default function({className, finaldesign, imageStyles}) {
    if (className) {
        var caseStudySectionName = `caseStudySection ${className}`;
        var overLabel = `overLabel ${className}`;
    } else {
        var caseStudySectionName = "caseStudySection";
        var overLabel = "overLabel";
    }
    
    return (
        <div className={caseStudySectionName}>
            <div className="casestudytFinalDesign">
                <div className={overLabel} style={{textAlign: "center"}}><p>Final Design</p></div>
                {Array.isArray(finaldesign) == true && 
                    finaldesign.map((image, index) => 
                        <ClickableImage imageSource={image} className="finalHiFiImage" id={index} key={index}/> 
                    )
                }

                {Array.isArray(finaldesign) != true && 
                    (
                    <>
                        <p className="researchGoalHeading">Mobile</p>
                        {finaldesign.mobile.map((design, index) => 
                            <ClickableImage imageSource={design.image} className="finalHiFiImageMobile" id={index} key={index} style={design.imageStyle}/>
                        )}
                        <p className="researchGoalHeading">Desktop</p>
                        {finaldesign.desktop.map((design, index) => 
                            <ClickableImage imageSource={design.image} className="finalHiFiImageMDesktop" id={index} key={index} style={design.imageStyle}/>
                        )}
                    </>)
                }
            </div>
        </div>
    )
};