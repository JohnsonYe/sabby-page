
import React from "react";

export default function({
    className = null,
    overview,
    projectName
}) {
    if (className) {
        var caseStudySectionName = `caseStudySection ${className}`;
        var overviewContainerName = `overviewContainer ${className}`;
        var overLabel = `overLabel ${className}`;
    } else {
        var caseStudySectionName = "caseStudySection";
        var overLabel = "overLabel";
        var overviewContainerName = "overviewContainer";
    }

    function generateFlex(flexTitle, overviewItems) {
        return (
            <div className="overviewFlexItem">
                <div className="overviewFlexTitle"><p>{flexTitle}</p></div>
                <p className="overviewFlexText">{overviewItems}</p>
            </div>
        )
    }
    
    return (
        <div className={caseStudySectionName}>
            <div className={overviewContainerName}>
                <div className={overLabel}><p>{projectName}</p></div>
                <div className="overviewFlexContainer">
                    {generateFlex("Project Backrgound", overview.projectBackground)}
                    {/* {generateFlex("Goals", overview.goal)} */}
                    {generateFlex("Problem Statement", overview.problemStatement)}
                </div>  
            </div>
        </div>
    )
};