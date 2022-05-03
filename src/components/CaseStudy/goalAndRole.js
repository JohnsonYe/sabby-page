
import React from "react";

export default function({className, overview, image}) {
    let caseStudySectionName = className ? `caseStudySection ${className} overviewFlexContainer` : "caseStudySection overviewFlexContainer";
    let goalImageBackgroundStyle = overview.goalImageBackgroundStyle ? overview.goalImageBackgroundStyle : {};

    return (
        <div className={caseStudySectionName}>
                <div className="overviewGoalRole overviewFlexItem goalAndRole">
                    <div className="centerWrapper">
                        <div className="goalRoleWrapper">
                            <div className="goalWrapper">
                                <div className="overviewFlexTitle"><p>Goals</p></div>
                                <div className="overviewFlexText"><p>{overview.goal}</p></div>
                            </div>

                            <div className="roleWrapper">
                                <div>
                                    <div className="overviewFlexTitle"><p>Role</p></div>
                                    <div className="overviewFlexText"><p>{overview.role}</p></div>
                                </div>
                                <div>
                                    <div className="overviewFlexTitle"><p>Duration</p></div>
                                    <div className="overviewFlexText"><p>{overview.duration}</p></div>
                                </div>
                                <div>
                                    <div className="view-prototype-button" onClick={() => { window.open(overview.prototype, "_blank") }}>
                                        <span>View Prototype Here</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overviewPrototype overviewFlexItem goalAndRole">
                    <div className="centerWrapper" style={goalImageBackgroundStyle}>
                        <div className="overviewPrototypeWrapper">
                            {
                                overview.imageStyle
                                ?
                                    <div>
                                        <img style={{width: overview.imageStyle.width}} src={image} />
                                    </div>
                                :   <div>
                                        <img style={{width: "300px"}} src={image} />
                                    </div>
                            }
                            
                        </div>
                    </div>
                </div>
        </div>
    )
};