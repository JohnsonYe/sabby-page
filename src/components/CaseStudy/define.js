
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
                    <p className="researchGoalHeading kinda-bold">
                        {define.customeDefineTaskTitle != null ? define.customeDefineTaskTitle : "Task flows:"}
                    </p>
                    <p className="researchGoalAnalysis">{define.taskflowDescription}</p>
                </div>
                {argNotEmpty(define.taskflows) && define.taskflows.map((taskflow, index) => 
                    <div key={index}>
                        <div style={{padding: "0", textAlign: "left" }}>
                            {taskflow.description.map((content, index2) => <p key={index2} className="descriptionText">{content}</p>)}
                        </div>
                        <ClickableImage imageSource={taskflow.image} className="empathizeMap" id={index} shadowBox="true"/>
                    </div>
                )}

                {argNotEmpty(define.painsList) && <ListSection title="Pains" list={define.painsList}/>}

                {argNotEmpty(define.needsList) && <ListSection title="Needs" list={define.needsList}/>}

                {define.customerJourneyMap && <CustomerJourneyMap title="Customer journey map" description={define.customerJourneyMap} image={define.customerJourneyMapImage}/>}
            </div>
        </div>
    )
};

function argNotEmpty(arg) { 
    if (arg == undefined || arg == null || arg.length == 0) {
        return false;
    }

    return true;
}

const ListSection = ({title, list}) => {
    return (
        <>
            <div style={{textAlign: "left"}}>{title}</div>
            <ul className="defineListContainer listUL">
                {list.map((text, index) => (
                    <li className="listLI" style={{listStylePosition: "outside", textAlign: "left"}} key={index}>{text}</li>
                ))}
            </ul>
        </>
    )
}

const CustomerJourneyMap = ({title, description, image}) => {
    return (
        <>
            <div className="" style={{padding: "0", textAlign: "left" }}>
                <p className="sectionSubheader kinda-bold">{title}:</p>
            </div>
            <div style={{textAlign: "left"}}>{description}</div>
            <ClickableImage imageSource={image} className="customerJourneyMap" id={1} shadowBox="true"/>
        </>
    )
}