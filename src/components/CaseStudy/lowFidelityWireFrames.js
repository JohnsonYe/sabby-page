
import React from "react";
import ClickableImage from './clickableImage';

export default function({className, lowFidelity}) {
    if (className) {
        var caseStudySectionName = `caseStudySubSection ${className}`;
    } else {
        var caseStudySectionName = "caseStudySubSection";
    }
    return (
        <div className={caseStudySectionName}>
            <div className="loFiContainer researcGoalListContainer">
                <div className="" style={{padding: "0", textAlign: "left" }}>
                    <p className="researchGoalHeading kinda-bold">Low fidelity wireframes:</p>
                    <p className="researchGoalAnalysis">{lowFidelity.description}</p>
                </div>

                {lowFidelity.images.map((image, index) => 
                    <ClickableImage imageSource={image} className="lofiImage" id={index} key={index} shadowBox="true" style={lowFidelity.imageStyle}/>
                )}
            </div>
        </div>
    )
};