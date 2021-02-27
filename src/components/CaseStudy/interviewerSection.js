import React from "react";

// Restrics
import InterviewerCard from './interviewerCard';

export default function({interviewers}) {
    return (
        <div className="interviewerSection">
            <div className="interviewerList">
                {interviewers.map((interviewer, index)=> (
                    <div className="interviewerListItem" key={index}>
                        <InterviewerCard interviewer={interviewer}/>
                    </div>
                ))}
            </div>
        
        </div>
    )
};