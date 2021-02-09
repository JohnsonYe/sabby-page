import '../../style/tpd.css';
import chase_casesudy_cover from '../../images/chase/chase_casestudy_cover.png';
import EMPATHY_MAP from '../../images/chase/empathy_map.png';
import USER_PERSONA from '../../images/chase/persona.png';
import WORKFLOW from '../../images/chase/taskflow.jpg';

import competitor from '../../images/chase/competitor_analysis.png';


import LO_FI_1 from '../../images/chase/LO_FI/lofi_1.png';
import LO_FI_2 from '../../images/chase/LO_FI/lofi_2.png';
import LO_FI_3 from '../../images/chase/LO_FI/lofi_3.png';

import MID_FI from '../../images/chase/MID_FI/mid_fi.png';

import HI_FI1 from '../../images/chase/HI_FI/hi-fi1.png';
import HI_FI2 from '../../images/chase/HI_FI/hi-fi2.png';

import '../../style/chase.css';


const chase = function() {
    const overview = {
        goals: [
            "Chase, owned by JP Morgan, has the mission is to empower customers’ lives by creating engaged, lifelong relationships. They have put a lot of effort in the past on providing the most relevant products for their customers, but now they want to go beyond and not just provide these products, but also tools to help them manage money better.",
            "Taking all of this into account, Chase sees an opportunity to make a difference, and help Millennials with their financial challenges."
        ],
        statement: "To build a responsive budgeting feature in to Chase’s current Mobile app.  This Feature should offer users to be able to create their budget and saving goals along with setting bill payment reminders all on the Chase mobile app.",
        role: 'UX/UI Designer with a total use of 80 hrs. This is not a real world project!',
        duration: '2 weeks',
        note: 'This is a fictional project for UX boot camp. ',
        prototype: "https://www.figma.com/proto/Zu93IQqf0UO0HZ1BjwxuLV/UXA?node-id=585%3A1&viewport=769%2C305%2C0.25&scaling=min-zoom&fbclid=IwAR1UpuNVwdpvljRqhmo5BcMn87QKp9gab07gKZWfrJX3cLAZUA1TzqJj_AA"
    };

    const research = {
        goals: [
            "Understand the market for personal finance management.",
            "Understand what features users really need for budgeting.",
            "Identify the competitors who specialize in personal budgeting.",
            "Identify what users care about the most when budgeting.",
            "Identify what demographic group likes to use budgeting apps.",
            "Understand the pros and cons of personal budgeting"
        ],
        primaryResearch: "Three participants were interviewed.",
        table: {
            header: ["Participant A", "Participant B", "Participant C"],
            body: [
                {
                    age: 58,
                    gender: 'Male',
                    role: 'IT Manager',
                },{
                    age: 30,
                    gender: 'Female',
                    role: 'Fashion Designer/UXA Student',
                },{
                    age: 32,
                    gender: 'Male',
                    role: 'Real Estate Agent',
                }
            ]
        },
        similarities: [
            "All three of the participants have used online budgeting app before.",
            "2. All of the participant believes that personal finance management is a very important skill to have.",
            "Two of the participants is still using their current budgeting app. But they both use a third party app.",
            "All of the participants expect a diagram and automatic calculation to tell them exactly how their spendings are.",
            "Only one participant uses an alarm to remind themselves for bill payments."
        ],
        differences: [
            "All participants said it would be great to have the bank push notifications to remind them about paying bills.",
            "All participants worried about security (giving personal information) for using a non banking app.",
            "All of the participants thinks that using the budgeting feature within their bank mobile app is more trustworthy than third party ones."
        ],
        marketResearch: [
            ""
        ]
    };

    const define = [
        "Task #1: Eric wants to set up a monthly budget.",
        "Task #2: Eric wants to save up to buy a car, so he wants to create a new saving goal for that."
    ]

    const design = {
        lo_fi: [LO_FI_1, LO_FI_2, LO_FI_3],
        wireframes: [MID_FI],
        hi_fi_wireframes: [HI_FI1, HI_FI2]
    }

    const test = {
        hfp: {
            label: "High Fidelity Prototypes",
            link: "https://www.figma.com/proto/Zu93IQqf0UO0HZ1BjwxuLV/UXA?node-id=585%3A1&viewport=769%2C305%2C0.25&scaling=min-zoom&fbclid=IwAR1UpuNVwdpvljRqhmo5BcMn87QKp9gab07gKZWfrJX3cLAZUA1TzqJj_AA"
        },
        utf: {
            label: "Usability Test Finidngs",
            text: "I tested my work with three participants. All of the users being tested currently uses Chase bank and their mobile app."
        },
        test_list: {
            label: "Here is what I found after tesing with my users.",
            list: [
                "All three of the users thought the whole process of creating a budget and saving goal was very easy and simple.",
                "One of the user who is older and is not familiar with the newest technology thought the flow was smooth and easy because I led her through the whole process, she said if she does it herself it would take more time.",
                "All of the users were not confused about the wording for due dates. They believed it was very straightforward.",
                "Two out of the three users thought the + sign on the editing budget page was a little confusing.",
                "Three out of three users thought the + sign next to the category section was not confusing. And suggested changing the wording on editing budget page to category to maintain consistency.",
                "All of the users gave the same suggestion to put budgeting as a button or section on the homepage instead of only having access from the menu bar."
            ]
        }
    }

    const competitorLogoGroup = [competitor];

    const breakLine = function() {
        return (<br/>)
    }

    
    const generateOverview = function () {
        const style = {
            overview_text: {
                marginBottom: '18px'
            }
        }
        return (
            <div className="project-overview">
                <div className="overview-title title">OVERVIEW</div>
                <div className="sectionBody goal">
                    <label>Project Background & Goals:</label>
                    {overview.goals.map((goal, index) => {
                        return <div className="overview-text" key={index}>{goal}</div>
                    })}
                </div>
                <div className="sectionBody statement" >
                    <label>Probelm statement: </label>
                    <div className="overview-text">{overview.statement}</div>
                </div>
                <div className="sectionBody role" >
                    <label>My role: </label>
                    <div className="overview-text">{overview.role} {breakLine()}This is not a real world project!</div>
                </div>
                <div className="sectionBody duration">
                    {/* <div className="view-prototype-button"><span>View Prototype Here</span></div> */}
                    <div className="view-prototype-button" onClick={() => { window.open(overview.prototype, "_blank") }}><span>View Prototype Here</span></div>
                    {/* <label>Duration: </label>
                    <span className="overview-text">{overview.duration}</span> */}
                </div>
            </div>
        );
    };

    const generateProcess = function () {
        const researchTable = function () {
            return (
                <table className="table-section">
                    <thead className="table-section-header">
                        <tr>
                            {research.table.header.map((x, i) => {
                                return (<th key={"table-header-"+i}>{x}</th>);
                            })} 
                        </tr>
                    </thead>
                    <tbody className="table-section-body">
                        <tr>
                            {research.table.body.map((x, i)=> {
                                return (
                                    <td key={"table-body-"+i}>
                                        <div className="table-body age">
                                            <span>Age: </span>
                                            <span>{x.age}</span>
                                        </div>
                                        <div className="table-body gender">
                                            <span>Gender: </span>
                                            <span>{x.gender}</span>
                                        </div>
                                        <div className="table-body role">
                                            <span>{x.role}</span>
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            )
        };
        
        const generateImageGroup = function () {
            const style = {
                width: '100%',
                height: '100%'
            }
            return (
                <>
                    {competitorLogoGroup.map((x, i)=>{return (
                        <div className="competitorLogo" key={"competitorLogo-"+i} style={style}>
                            <img src={x} style={style}/>
                        </div>
                    )})}
                </>
            );
        };

        function getFinding() {
            return (
                <div>
                    <label>Here are my findings after the interview:</label>
                    <ul className="section-list">
                        {research.interviewFinding.map((goal, i) => {
                            return (
                                <li key={"goal-"+i} className="overview-text">{goal}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
        function getSurvey() {
            return (
                <div>
                    <label>Here are my findings after the survey:</label>
                    <ul className="section-list">
                        {research.survey.map((goal, i) => {
                            return (
                                <li key={"goal-"+i} className="overview-text">{goal}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
        const researchCompare = function () {
            return (
                <div className="research-compare-section">
                    <div className="research-similarities">
                        <ul>{research.similarities.map((x, i)=>{return(<li key={"similarities-"+i}>{x}</li>)})}</ul>
                    </div>
                    <div className="research-different">
                        <ul>{research.differences.map((x, i)=>{return(<li key={"differences-"+i}>{x}</li>)})}</ul>
                    </div>
                </div>
            );
        };
        return (
            <div className="project-process">
                <div className="procecss-title title">RESEARCH</div>
                <div className="sectionBody research">
                    <label>Research goals: </label>
                    <ul className="section-list">
                        {research.goals.map((goal, i) => {
                            return (
                                <li key={"goal-"+i} className="overview-text">{goal}</li>
                            )
                        })}
                    </ul>
                </div>

                <div className="sectionBody primaryResearch">
                    <label>Primary Research:</label>
                    <div className="table-description">{research.primaryResearch}</div>
                    {researchTable()}
                    
                    {/* {getFinding()}
                    {getSurvey()} */}
                    <div className="table-description">Here are my findings after the interviews.</div>
                    {researchCompare()}
                </div>

                <div className="sectionBody secondaryResearch">
                    <label>Secondary Research:</label>
                    <div className="secondaryResearch-list marketResearch">
                        {/* <div style={{marginTop:"12px"}}>Market Research:</div> */}
                        {/* {research.marketResearch.map((x, i)=>{return (<div key={"marketResearch-"+i}>{x}</div>)})} */}
                    </div>

                    <div className="secondaryResearch-list competitor">
                        <div style={{marginTop:"12px", marginBottom:"12px"}}>Competitors Analysis:</div>
                        <div className="overview-text">I researched the following competitors :</div>
                        <div className="research-image-group">
                            {generateImageGroup()}
                        </div>
                    </div>
                </div>

                
            </div>
        )
    };

    const generateEmpathize = function () {
        function generateImageSection (name, src) {
            return (
                <div className="project-image-section">
                    <label>{name}:</label>
                    <div className="personal-image-section">
                        <img src={src}></img>
                    </div>
                </div>
            );
        }
        return (
            <div className="project-empathize">
                <div className="empathize-title title">EMPATHIZE</div>
                <div className="sectionBody empathize">
                    {generateImageSection("Empathy map", EMPATHY_MAP)}    
                    {generateImageSection("User persona", USER_PERSONA)}
                </div>
            </div>
        );
    };

    const generateDefine = function () {
        return (
            <div className="project-define">
                <div className="define-title title">DEFINE</div>
                <div className="sectionBody define">
                    <label>Task Flow:</label>
                    {define.map((d, index) => {
                        return (<div className="overview-text" key={index}>
                            <div>{d}</div>
                        </div>)
                    })}
                    
                    <div className="personal-image-section">
                        <img className="task-flow-image" src={WORKFLOW}></img>
                    </div>
                </div>
            </div>
        );
    };

    const generateDesign = function () {
        function generate (name, description, images, type) {
            var d = (description === "") ? <></> : <div className="overview-text">{description}</div>;
            let style = (type === "hi_fi_wireframe") ? { flexWrap: "wrap" }: {};
            let marginStyle = (type === "mid_fi_wireframe") ? { marginTop: "0px", maxWidth: "95vw" } : {};

            if (type == 'wireframe') {
                marginStyle = { width: 'calc(90vw / 3)' };
            }
            
            return (
                <div className="sectionBody design">
                    <label>{name}:</label>
                    <div className="research-image-group" style={style}>
                        {images.map((x,i)=>{return (<div className={type+"-image"} key={type+'-'+i} style={marginStyle} ><img src={x} style={marginStyle}></img></div>)})}
                    </div>
                </div>
                
            );
        }
        return (
            <div className="project-design">
                <div className="design-title title">DESIGN</div>
                {generate('Low fidelity wireframes', "", design.lo_fi, "wireframe")}
                {generate('Mid fidelity wireframes', "", design.wireframes, "mid_fi_wireframe")}

                {generate('High fidelity wireframes desktop', "", design.hi_fi_wireframes, "hi_fi_wireframe")}

            </div>
        );
    }

    const generateTest = function () {
        return (
            <div className="project-test">
                <div className="test-title title">TEST</div>
                <div className="sectionBody test">
                    <label>{test.hfp.label}:</label>
                    <a href={test.hfp.link} target="_blank"><div className="view-prototype">View Prototype Here</div></a>
                </div>

                <div className="sectionBody test">
                    <label>{test.utf.label}:</label>
                    <div className="overview-text">{test.utf.text}</div>
                </div>

                <div className="sectionBody test">
                    <label>{test.test_list.label}:</label>
                    <ul>
                        {test.test_list.list.map((x, i)=>{return(<li key={"tf-"+i}>{x}</li>)})}
                    </ul>
                </div>
            </div>
        );
    }

    const generateNextStep = function () {
        return (
            <div className="project-test">
                <div className="next-step-title title">NEXT STEP</div>
                <div className="sectionBody next-step">
                    <label>1. More Testings:</label>
                    <div style={{marginBottom: "18px"}}>Gather more usability testers for more feedback and iterations.</div>
                    
                    <label>2. More Feedbacks</label>
                    <div>Show my work to other experienced UX designers for extra feedbacks so my design can be improved.</div>
                </div>
            </div>
        )
    }

    return (
        <div className="case-study-container chase">
            <div className="prject-header-background">
            {/* <div className="project-body-title">The Product designer</div> */}
                <div className="header-image" style={{textAlign: "center", background: "#dcf9e7"}}>
                    <img src={chase_casesudy_cover} style={{marginTop: '0px'}}/>
                </div>
            </div>

            <div className="project-body">
                {/* <OVERVIEW /> */}
                {generateOverview()}
                {generateProcess()}
                {generateEmpathize()}
                {generateDefine()}
                {generateDesign()}
                {generateTest()}
                {generateNextStep()}
            </div>
        </div>
    )
};



export default chase;