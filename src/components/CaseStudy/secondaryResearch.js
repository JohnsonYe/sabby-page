import React from "react";

import ClickAbleImage from './clickableImage';

export default function({className, research}) {
    if (className) {
        var caseStudySectionName = `caseStudySubSectionSecondaryResearch ${className}`;
    } else {
        var caseStudySectionName = "caseStudySubSectionSecondaryResearch";
    }

    return (
        <div className={caseStudySectionName}>
            <div className="researcGoalListContainer" style={{
                    padding: "0",
                    textAlign: "left"
                }}>
                <p className="researchGoalHeading">Secondary Research:</p>
                <p className="researchGoalAnalysis">{research.secondaryResearchDescription}</p>
                <ClickAbleImage imageSource={research.competitorAnalysisImage} className="competitorAnalysisImage" id="0" style={research.imageStyle}/>    
            </div>
        </div>
    )
};