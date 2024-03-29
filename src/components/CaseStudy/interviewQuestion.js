import React from "react";

export default function({className, research}) {
    if (className) {
        var caseStudySectionName = `caseStudySubSection ${className}`;
        var overLabel = `overLabel ${className}`;
    } else {
        var caseStudySectionName = "caseStudySubSection";
        var overLabel = "overLabel";
    }
    
    return (
        <div className={caseStudySectionName}>
            <div className="researchGoalSectionContainer">
                <div className="researcGoalListContainer" style={{
                    padding: "0",
                    textAlign: "left"
                }}>
                    <p className="researchGoalHeading kinda-bold">Sample Interview Questions:</p>
                    <ul className="researchGoalItemUL">
                        {research.sampleInterviewQuestions.map((goal, index)=> {
                            return (
                                <li className="researchGoalItem" key={index}>{goal}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
};