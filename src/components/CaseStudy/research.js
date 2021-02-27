import React from "react";

// Restrics
import ResearchGoals from './researchGoal';
import PrimaryResearch from './primaryResearch';
import SecondaryResearch from "./secondaryResearch";

export default function({className, research}) {
    if (className) {
        var caseStudySectionName = `caseStudySection ${className}`;
    } else {
        var caseStudySectionName = "caseStudySection";
    }
    return (
        <div className={caseStudySectionName}>
            <ResearchGoals className="researchGoal" research={research}></ResearchGoals>
            <PrimaryResearch className="primaryResearch" research={research}></PrimaryResearch>
            <SecondaryResearch className="secondaryResearch" research={research}></SecondaryResearch>
            {/* <ResearchFinding /> */}
        </div>
    )
};