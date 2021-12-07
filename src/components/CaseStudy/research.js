import React from "react";

// Restrics
import ResearchGoals from './researchGoal';
import PrimaryResearch from './primaryResearch';
import SecondaryResearch from "./secondaryResearch";
import InterviewQuestion from "./interviewQuestion";
export default function({className, research}) {
    if (className) {
        var caseStudySectionName = `caseStudySection ${className}`;
    } else {
        var caseStudySectionName = "caseStudySection";
    }
    return (
        <div className={caseStudySectionName}>
            <ResearchGoals className="researchGoal" research={research}></ResearchGoals>
            {research.sampleInterviewQuestions != null && <InterviewQuestion className="interviewQuestion" research={research}></InterviewQuestion>}
            <PrimaryResearch className="primaryResearch" research={research}></PrimaryResearch>
            {research.secondaryResearchDescription != null && <SecondaryResearch className="secondaryResearch" research={research}></SecondaryResearch>}
            {/* <ResearchFinding /> */}
        </div>
    )
};