import React from "react";
import InterviewerSection from './interviewerSection';
import ClickAbleImage from './clickableImage';

export default function({className, research}) {
    if (className) {
        var caseStudySectionName = `caseStudySubSectionPrimaryResearch ${className}`;
    } else {
        var caseStudySectionName = "caseStudySubSectionPrimaryResearch";
    }

    return (
        <div className={caseStudySectionName}>
            <div className="researcGoalListContainer" style={{
                    padding: "0",
                    textAlign: "left"
                }}>
                <p className="researchGoalHeading">User interviews:</p>
                <p className="researchGoalAnalysis">{research.primaryResearchAnalysis}</p>
                <InterviewerSection interviewers={research.interviewers} />

                <p className="researchFinding">{research.researchFindingDescription}</p>
                <ul className="researcGoalListContainer listUL">
                    {research.interviewFinding.map((finding, index) => (
                        <li className="listLI" style={{listStylePosition: "outside"}} key={index}>{finding}</li>
                  ))}
                </ul>
                
            {research.surveyDescription !== null && <p className="surveyDescription" style={{marginBottom: "0px"}}>{research.surveyDescription}</p>}
            {research.surveyImage != null && <ClickAbleImage imageSource={research.surveyImage} className="surveyImage" id="0" />}
            </div>
        </div>
    )
};