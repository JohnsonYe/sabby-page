
import React from "react";
import LowFidelityWireFrames from './lowFidelityWireFrames';
import MidFidelityWireFrames from './midFidelityWireFrames';
import UIDesign from './uiDesign';

export default function({className, design}) {
    if (className) {
        var caseStudySectionName = `caseStudySection researchGoalSectionContainer ${className}`;
        var overLabel = `overLabel ${className}`;
    } else {
        var caseStudySectionName = "caseStudySection researchGoalSectionContainer";
        var overLabel = "overLabel";
    }

    
    return (
        <div className={caseStudySectionName}>
            <div className={overLabel} style={{textAlign: "center"}}><p>Design</p></div>
            {design.lowFidelity != null && <LowFidelityWireFrames className="lowFidelity" lowFidelity={design.lowFidelity}/>}
            <MidFidelityWireFrames className="midFidelity" midFidelity={design.midFidelity} />
            {design.UIDeign != null && <UIDesign className="uiDesign" UIDeign={design.UIDeign} />}
            {design.conclusion != null &&
                <div className="designConclusion researchGoalAnalysis researcGoalListContainer" style={{textAlign: "left"}}>
                    <p>{design.conclusion}</p>
                </div>
            }
        </div>
    )
};