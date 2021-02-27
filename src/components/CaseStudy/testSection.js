
import React from "react";
import ClickableImage from './clickableImage';
export default function({className, test, prototype}) {
    if (className) {
        var caseStudySectionName = `caseStudySection researchGoalSectionContainer ${className}`;
        var overLabel = `overLabel ${className}`;
    } else {
        var caseStudySectionName = "caseStudySection researchGoalSectionContainer";
        var overLabel = "overLabel";
    }

    
    return (
        <div className={caseStudySectionName}>
            <div className={overLabel} style={{textAlign: "center"}}><p>Test</p></div>
            <div className="researcGoalListContainer researchGoalAnalysis" style={{textAlign: "left"}}>
                    <div className="overviewFlexText"><p>{test.description}</p></div>
                    <div className="overviewFlexText"><p>{test.listDescription}</p></div>
                    <ul className="testGoalListUL">
                    {test.goalList.map((goal, index) => 
                        <li className="testGoalList" key={index} style={{listStylePosition: "outside"}}>{goal}</li>
                    )}
                    </ul>
                    <div className="sectionBody test">
                        <a href={prototype} target="_blank"><div className="view-prototype">View Prototype Here</div></a>
                    </div>
                    {test.testResult != null && <ClickableImage imageSource={test.testResult} className="testResult" id="0" style={test.imageStyle}/>}
            </div>
        </div>
    )
};