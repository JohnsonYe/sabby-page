
import React from "react";
import ClickableImage from './clickableImage';

export default function({className, midFidelity}) {
    if (className) {
        var caseStudySectionName = `caseStudySubSection ${className}`;
        var overLabel = `overLabel ${className}`;
    } else {
        var caseStudySectionName = "caseStudySubSection";
        var overLabel = "overLabel";
    }
    return (
        <div className={caseStudySectionName}>
            <div className="midFiContainer researcGoalListContainer">
                <div className="" style={{padding: "0", textAlign: "left" }}>
                    <p className="researchGoalHeading kinda-bold">Mid fidelity wireframes:</p>
                    <p className="researchGoalAnalysis">{midFidelity.description}</p>
                </div>

                {midFidelity.images.map((image, index) => 
                    {return midFidelity.imageStyle != null ?
                         <ClickableImage imageSource={image} className="midfiImage" id={index} key={index} style={midFidelity.imageStyle}/> :
                         <ClickableImage imageSource={image} className="midfiImage" id={index} key={index} style={midFidelity.imageStyles[index]}/>
                    }
                )}
            </div>
        </div>
    )
};