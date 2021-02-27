
import React from "react";

export default function({className, nextSteps}) {
    if (className) {
        var caseStudySectionName = `caseStudySection researchGoalSectionContainer ${className}`;
        var overLabel = `overLabel ${className}`;
    } else {
        var caseStudySectionName = "caseStudySection researchGoalSectionContainer";
        var overLabel = "overLabel";
    }
    
    return (
        <div className={caseStudySectionName}>
            <div className={overLabel} style={{textAlign: "center"}}><p>Next steps & Thoughts</p></div>
            <div className="researcGoalListContainer researchGoalAnalysis" style={{textAlign: "left"}}>
                <div className="overviewFlexText"><p>{nextSteps.description}</p></div>
                {nextSteps.body.map((body, index) => 
                    <div className="" key={index} style={{
                        padding: "0",
                        textAlign: "left"
                    }}>
                        <p className="researchGoalHeading kinda-bold">{body.header}</p>
                        {body.contents.map((content, index2) => <p className="researchGoalAnalysis" key={index2}>{content}</p>)}
                    </div>
                )}
                <div className="overviewFlexText"><p>{nextSteps.finalContent}</p></div>
            </div>
        </div>
    )
};