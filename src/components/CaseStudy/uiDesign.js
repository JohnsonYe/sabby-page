
import React from "react";
import ClickableImage from './clickableImage';

export default function({className, UIDeign}) {
    if (className) {
        var caseStudySectionName = `caseStudySubSection ${className}`;
        var overLabel = `overLabel ${className}`;
    } else {
        var caseStudySectionName = "caseStudySubSection";
        var overLabel = "overLabel";
    }
    return (
        <div className={caseStudySectionName}>
            <div className="uiDesignContainer researcGoalListContainer">
                <div className="" style={{padding: "0", textAlign: "left" }}>
                    <p className="researchGoalHeading kinda-bold">UI design:</p>
                    <p className="researchGoalAnalysis"></p>
                </div>

                <ClickableImage imageSource={UIDeign.image} className="uiDesignImage" id="0" shadowBox="true" style={UIDeign.imageStyle}/>
            </div>
        </div>
    )
};