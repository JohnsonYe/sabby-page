import React from "react";
import '../../style/components/interviewerCard.css';

export default function({interviewer, key}) {
    let gender = (interviewer.gender == "Male") ? "lightblue" : "pink";
    let genderClass = (interviewer.gender == "Male") ? "fas fa-mars" : "fas fa-venus";
    return (
        <div className="interviewerCard">
            <div className="interviewerCardContainer">
                <div className="cardTitle"><h2>{interviewer.name}</h2></div>
                <div className="cardIcon"><i className={genderClass} style={{color: gender}}></i></div>
                <div className="cardRole title title--epic" style={{backgroundColor: gender}}>{interviewer.role}</div>
                { interviewer.age != null
                    ? <div className="cardAge" style={{backgroundColor: gender}}>Age: {interviewer.age}</div>
                    : <div className="cardAge" style={{backgroundColor: gender}}>Major: {interviewer.major}</div>
                }
            </div>    
        </div>
    )   
};