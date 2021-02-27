
import React from "react";

export default function({image, className}) {
    let caseStudySectionName = className ? `caseStudySection ${className}` : "caseStudySection";
    return (
        <div className={caseStudySectionName}>
            <img className="headerImage" src={image} />
        </div>
    )
};