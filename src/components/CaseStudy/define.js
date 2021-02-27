
import React from "react";
import ClickableImage from './clickableImage';

export default function({className, define}) {
    if (className) {
        var caseStudySectionName = `caseStudySection researchGoalSectionContainer ${className}`;
        var overLabel = `overLabel ${className}`;
    } else {
        var caseStudySectionName = "caseStudySection researchGoalSectionContainer";
        var overLabel = "overLabel";
    }
    return (
        <div className={caseStudySectionName}>
            <div className="defineContainer researcGoalListContainer">
                <div className={overLabel} style={{textAlign: "center"}}><p>Define</p></div>
                <div className="" style={{padding: "0", textAlign: "left" }}>
                    <p className="researchGoalHeading kinda-bold">Task flows:</p>
                    <p className="researchGoalAnalysis">{define.taskflowDescription}</p>
                </div>

                {define.taskflows.map((taskflow, index) => 
                    <div key={index}>
                        <div style={{padding: "0", textAlign: "left" }}>
                            {taskflow.description.map((content, index2) => <p key={index2} className="descriptionText">{content}</p>)}
                        </div>
                        <ClickableImage imageSource={taskflow.image} className="empathizeMap" id={index} shadowBox="true"/>
                    </div>
                )}
            </div>
        </div>
    )
};