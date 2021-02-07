import '../../style/tpd.css';
import tpd_overview from '../../images/tpd/tpd_overview.png';
import competitor_analysis from '../../images/tpd/competitor_analysis.png';
import EMPATHY_MAP from '../../images/tpd/empathy_map.png';
import USER_PERSONA from '../../images/tpd/persona.png';
import WORKFLOW_1 from '../../images/tpd/taskflow_1.jpg';
import WORKFLOW_2 from '../../images/tpd/taskflow_2.jpg';
import LO_FI_1 from '../../images/tpd/LO_FI/1.jpeg';
import LO_FI_2 from '../../images/tpd/LO_FI/2.jpeg';


import MID_FI from '../../images/tpd/MID_FI/mid_fi.png';

import HI_FI from '../../images/tpd/HI_FI/hi_fi.png';


import Final_Hi_Fi from '../../images/tpd/Final_Hi_Fi/final.png';

import UI_KIT from '../../images/tpd/UI_KIT.png';

const theProductDesigner = function() {
    const overview = {
        goals: [
            "There are currently more than 1.74 billion websites in existence, and more than 4 million apps available for download. The market of product design has been growing, therefore having an app just for the designers can be beneficial. We want to connect all the product designers out there so we can all grow as a community, as a whole.",
            "The users of this app can create a profile with their portfolio attached. The users can also search and add other designers and companies to share experience and have private conversations. Most importantly, employers can post up jobs to hire the designers!"
        ],
        statement: 'To build a responsive mobile app from scratch.  This application should offer users to use features like apply for a job, share work, and sign up for events all related to product design.',
        role: 'UX/UI Designer with total use of 80 hrs. This is not a real world project!',
        duration: 'https://www.figma.com/proto/Zu93IQqf0UO0HZ1BjwxuLV/UXA?node-id=661%3A1&viewport=797%2C424%2C0.2597874701023102&scaling=min-zoom',
        note: 'This is a fictional project for Ux boot camp.',
        prototype: "https://www.figma.com/proto/Zu93IQqf0UO0HZ1BjwxuLV/UXA?node-id=661%3A1&viewport=797%2C424%2C0.2597874701023102&scaling=min-zoom"
    };

    const research = {
        goals: [
            "Understand if the designers will use this app and think is convenient.",
            "Understand what features the designers really need and expect in this app.",
            "Identify the competitors in job finding and UX related applications.",
            "Identify what other features should be added for this app.",
            "Understand from the employer users perspective and their needs."
        ],
        primaryResearch: "Two Participants were being 1:1 interviewed, 7 other participants completed a survey.",
        table: {
            header: ["Participant A", "Participant B"],
            body: [
                {
                    age: 23,
                    gender: 'Female',
                    role: 'Product Designer'
                },{
                    age: 24,
                    gender: "Male",
                    role: "Product Designer"
                }
            ]
        },
        interviewFinding: [
            "Both of the participants are currently a product designer with a job and with minimum 2 years of experience.",
            "Both of the participants expected this app to be a community app like reddit.",
            "One participant find value in this app while the other believes that there are already many platforms that does the same thing and it has a strong stand in the industry.",
            "Both of the participants believes that there will be no downside for the new job searching apps because different person has different preferences.",
            "Both of the participants does not share their work on popular platforms.",
            "One participant cared about the app for having connection and mass apply like Indeed, while the other cared more about able to find jobs for newbies with no experience"
        ],
        survey: [
            "67.5% of the participants said they would download this app after knowing the features of this app.",
            "87.5% of the participants said they share their work on other platforms and also likes to view other’s work as insipration.",
            "5 out of 7 participants said they wish the sharing work feature could look like Instagram."
        ],
        differences: [
            "Three out of four participants believe virtual try on will make a difference.",
            "Females care more about the styling of the clothes, while males are okay with plain, single colored clothes.",
            "Two users care about free return because they feel secure when shopping online. The other two users like my male participant didn’t care because he never returns things even if there is a problem."
        ]
    };

    const define = [
        "I created a task flow where my persona Lily wants to buy a T-shirt from Mirror.",
        "Celine is a user who already has an account, and would like to sign up for a new webinar that is happening tomorrow virtually."
    ]

    const design = {
        lo_if: [LO_FI_1, LO_FI_2],
        wireframes: [MID_FI],
        ui_design: UI_KIT,
        hi_fi_wireframes: [HI_FI]
    }

    const test = {
        hfp: {
            label: "High Fidelity Prototypes",
            link: "https://www.figma.com/proto/Zu93IQqf0UO0HZ1BjwxuLV/UXA?node-id=661%3A1&viewport=797%2C424%2C0.2597874701023102&scaling=min-zoom"
        },
        utf: {
            label: "Usability Test Finidngs",
            text: "I tested my work with two participants. All of the users being tested are either studying product design or is already a product designer."
        },
        test_list: {
            label: "Here is what I found after tesing with my users.",
            list: [
                "Both of the participants thought the overall user experience was easy and simple to follow. The steps are clearly shown so they did not struggle doing both of the tasks at all.",
                "Both of the participants really liked the one-click apply option because it saved a lot of time for them.",
                "Both of the participants liked the dark theme of this app, it is very modern and well fitted for an app for designers.",
                "One of the participants suggested changing some of the white backgrounds to dark to match the mobile app theme.",
                "Both of the participants liked having one cta for friend requests on the notifications page.",
                "One of the participants pointed out to align the avatars with the post so it does not look off.",
                "One of the participants mentioned adding another apply cta to the bottom of the detailed job description page, so the user will not have to scroll all the way up to apply."
            ]
        }
    }

    const Final_Wireframess = [Final_Hi_Fi];
    
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
                    <span className="overview-text">{overview.role}</span>
                </div>
                <div className="sectionBody duration">
                    <div className="view-prototype-button" onClick={() => { window.open(overview.prototype, "_blank") }}><span>View Prototype Here</span></div>
                    {/* <div className="view-prototype-button"><span>View Prototype Here</span></div> */}
                    {/* <a href={overview.prototype} target="_blank"><div className="view-prototype">View Prototype Here</div></a> */}
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
                    {getFinding()}
                    {getSurvey()}
                    {/* <div className="table-description">Here are my findings after the interviews.</div>
                    {researchCompare()} */}
                </div>

                <div className="sectionBody secondaryResearch">
                    <label>Secondary Research:</label>
                    <div className="secondaryResearch-list marketResearch">
                        <div style={{marginTop:"12px"}}>Competitor Analysis:</div>
                        <div style={{marginTop:"12px"}}>I researched the following competitors and made comparison between them:</div>
                        <img style={{marginLeft:"-150px"}} src={competitor_analysis}/>
                    </div>

                    {/* <div className="secondaryResearch-list competitor">
                        <div style={{marginTop:"12px", marginBottom:"12px"}}>Competitors:</div>
                        <div className="overview-text">{research.competitor}</div>
                    </div> */}
                </div>

                <div className="research-image-group">
                    {/* {generateImageGroup()} */}
                </div>
            </div>
        )
    };

    const generateEmpathize = function () {
        function generateImageSection (name, src) {
            return (
                <div className="project-image-section">
                    <label>{name}:</label>
                    <div className="personal-image-section box-shadow">
                        <img src={src}></img>
                    </div>
                </div>
            );
        }
        return (
            <div className="project-empathize" style={{paddingTop: "0px"}}>
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
                            
                            <div>Task flow #{index+1}: {d}</div>
                        </div>)
                    })}
                    
                    <div className="personal-image-section">
                        <img className="task-flow-image" src={WORKFLOW_1}></img>
                        <img className="task-flow-image" style={{marginTop: "-5px"}} src={WORKFLOW_2}></img>
                    </div>
                </div>
            </div>
        );
    };

    const generateDesign = function () {
        function generate (name, description, images, type) {
            var d = (description === "") ? <></> : <div className="overview-text">{description}</div>;
            let style = type == 'wireframe' ? { width: 'calc(90vw / 2)'} : {};
            let lowFiStyle = type == 'wireframe' ? { width: '100%', height: '100%'} : {};
            return (
                <div className="sectionBody design">
                    <label>{name}:</label>
                    {d}
                    <div className="research-image-group">
                        {images.map((x,i)=>{return (<div className={type+"-image"} key={type+'-'+i} style={lowFiStyle}><img src={x} style={style}></img></div>)})}
                    </div>
                </div>
            );
        }
        return (
            <div className="project-design">
                <div className="design-title title">DESIGN</div>
                {generate('Low fidelity wireframes', "", design.lo_if, "wireframe")}
                {generate('Mid fidelity wireframes', "", design.wireframes, "mid_fi_wireframe")}
                
                <div className="sectionBody design">
                    <label>UI designs:</label>
                    <div className="research-image-group ui-design box-shadow" style={{padding: "0px"}}>
                        <img className="ui-design-image" src={design.ui_design}></img>
                    </div>
                </div>

                {/* {generate('High fidelity wireframes', "", design.hi_fi_wireframes, "hi_fi_wireframe")} */}
                {generate('High fidelity wireframes', "", [HI_FI], "hi_fi_wireframe")}
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

    const generateFinalWireframes = function () {
        return (
            <div className="project-test">
                <div className="sectionBody final_wireframe">
                    <div className="final_wireframe_group">
                        {Final_Wireframess.map((x, i)=>{
                            return(
                                <img key={i} src={x}></img>
                            )})}
                    </div>
                </div>
            </div>
        )
    }

    const generateNextStep = function () {
        return (
            <div className="project-test">
                <div className="next-step-title title">NEXT STEP</div>
                <div className="sectionBody next-step">
                    <label>1. More Testings:</label>
                    <div style={{marginBottom: '18px'}}>Gather more usability testers for more feedback and iterations. </div>
                    
                    <label>2. More Feedbacks</label>
                    <div>Show my work to other experienced UX designers for extra feedbacks so my designs can be improved.  </div>
                </div>
            </div>
        )
    }

    return (
        <div className="case-study-container the-product-designer">
            <div className="prject-header-background">
            {/* <div className="project-body-title">The Product designer</div> */}
                <div className="header-image" style={{textAlign: "center", background: "#545454"}}>
                    <img src={tpd_overview}/>
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
                {generateFinalWireframes()}
                {generateNextStep()}
            </div>
        </div>
    )
};

const OVERVIEW = function () {
    const body = [
        {
            title: "Project Background & Goals",
            content: "As the need for technology and the internet has been growing, all the technology related jobs have been the top trendy careers in the U.S.,  product design (UX & UI) is one of them. There are currently more than 1.74 billion websites in existence, and more than 4 million apps available for download. The market of product design has been growing, therefore having an app just for the designers can be beneficial. We want to connect all the product designers out there so we can all grow as a community, as a whole. \nThe users of this app can create a profile with their portfolio attached. The users can also search and add other designers and companies to share experience and have private conversations. Most importantly, employers can post up jobs to hire the designers!",
        },
        {
            title: "Problem Statement",
            content: "To build a responsive mobile app from scratch.  This application should offer users to use features like apply for a job, share work, and sign up for events all related to product design.",
        },
        {
            title: "My Role",
            content: "UX/UI Designer",
        },
        {
            title: "Duration",
            content: "2 weeks",
        },
        
    ];

    

    
    return (
        <div className="overview-section">
            {body.map((obj, index) => {
                return <div className="section-container">
                    <div className="section-title" key={index}>{obj.title}: </div>
                    <div className="section-content" key={index}> {obj.content}</div>
                </div>
                
            })}
        </div>
    )
}

export default theProductDesigner;