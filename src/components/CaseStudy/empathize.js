
import React from "react";
import ClickableImage from './clickableImage';
export default function({className, empathize}) {
    if (className) {
        var caseStudySectionName = `caseStudySection researchGoalSectionContainer ${className}`;
        var overLabel = `overLabel ${className}`;
    } else {
        var caseStudySectionName = "caseStudySection researchGoalSectionContainer";
        var overLabel = "overLabel";
    }
    return (
        <div className={caseStudySectionName}>
            <div className="empathizeContainer researcGoalListContainer">
                <div className={overLabel} style={{textAlign: "center"}}><p>Empathize</p></div>
                <div className="" style={{padding: "0", textAlign: "left" }}>
                    <p className="researchGoalHeading kinda-bold">Empathy map:</p>
                    <p className="researchGoalAnalysis">{empathize.empathyDescription}</p>
                </div>
                <ClickableImage imageSource={empathize.empathyMapImage} className="empathizeMap" id="0" shadowBox="true" style={empathize.imageStyle}/>
                <div className="" style={{padding: "0", textAlign: "left" }}>
                    <p className="sectionSubheader kinda-bold">User persona:</p>
                </div>
                {empathize.personaImage.map((image, index) => 
                    <ClickableImage imageSource={image}  className="personaImage" id={index} key={index} shadowBox="true" style={empathize.imageStyle}/>
                )}
                
            </div>
        </div>
    )
};