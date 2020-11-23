import React from 'react';
import '../../style/mirror.css';
import Mirror_Mock_Up from '../../images/mirror/mirror-mock_up.png';
import SHEIN_LOGO from '../../images/mirror/logo/shein_logo.png';
import ROMWE_LOGO from '../../images/mirror/logo/romwe_logo.png';
import WISH_LOGO from '../../images/mirror/logo/wish_logo.png';
import HANDM_LOGO from '../../images/mirror/logo/handm_logo.png';
import UNIQLO_LOGO from '../../images/mirror/logo/uniqlo_logo.png';
import USER_PERSONA from '../../images/mirror/user_persona.png';
import EMPATHY_MAP from '../../images/mirror/empathy_map.png';
import WORKFLOW from '../../images/mirror/workflow.png';
import wireframe_1 from '../../images/mirror/wireframe/1_HOME.png';
import wireframe_2 from '../../images/mirror/wireframe/2_CATEGORY_PAGE.png';
import wireframe_3 from '../../images/mirror/wireframe/3_PRODUCT_FILTER_MODAL.png';
import wireframe_4 from '../../images/mirror/wireframe/4_Detail_product_page.png';
import wireframe_5 from '../../images/mirror/wireframe/5_CART_PAGE.png';
import ui_design_1 from '../../images/mirror/ui_design/case_study_UI.png'
import hi_fi_wireframe_1 from '../../images/mirror/hi_fi/1.png';
import hi_fi_wireframe_2 from '../../images/mirror/hi_fi/2.png';
import hi_fi_wireframe_3 from '../../images/mirror/hi_fi/3.png';
import hi_fi_wireframe_4 from '../../images/mirror/hi_fi/4.png';
import hi_fi_wireframe_5 from '../../images/mirror/hi_fi/5.png';
import hi_fi_wireframe_6 from '../../images/mirror/hi_fi/6.png';
import hi_fi_wireframe_7 from '../../images/mirror/hi_fi/7.png';
import hi_fi_wireframe_8 from '../../images/mirror/hi_fi/8.png';
import hi_fi_wireframe_9 from '../../images/mirror/hi_fi/9.png';

const Mirror = function() {
    const overview = {
        goal: 'Mirror is a clothing retail store known for its good quality and low cost clothings. As the growth of technology, online shopping has become extremely popular for its convenience to the customers. Mirror would like to follow the trend and build a responsive website to sell all of their clothes.',
        statement: 'To build a responsive website (web and mobile) for users to shop both in store and online . This platform should offer users with a variety of search options, while still being able to navigate the pages easily.',
        role: 'UX/UI designer',
        duration: '4 weeks',
        note: 'This is a fictional project for Ux boot camp.'
    };

    const competitorLogoGroup = [SHEIN_LOGO, ROMWE_LOGO, WISH_LOGO, HANDM_LOGO, UNIQLO_LOGO];

    const conclusion = {
        text: "I have learned many great lessons from designing an ecommerce website. I believe I followed my goals and ended up creating a user friendly web design. This was my first and ever design and I am sure it is still not perfect, but what is perfect anyway? Perfectness comes in  time and experiences.",
        ending: "Thank you for your time! Remember to be happy!"
    }

    const test = {
        mfp: {
            label: "Mid-fidelity prototypes",
            text: "Usability testing task: To successfully purchase a short dress on Mirror without using the search tool.",
            participants: 3
        },
        tf: {
            label: "Test findings",
            text: "All three of my participants felt that my designs were great and were easy to access. Most of the features were clear and easy to understand, which led to the quick and successful purchase process. Here are some things I found after the whole testing process (including the interview) was done.",
            list: [
                "All of the participants favored the navigation bar to be very clear and big. It visually gave them hierarchy to better finish the process of buying a dress.",
                "All of the participants were more focused or expected to have really cool designs and features during this test. Two of the three participants recommended looking at Zara’s page for some ideas. One participant recommended using cuter fonts to make the page look more unique.  As I explained instead of having cool features, I wanted to focus more on the smooth flow of purchasing a product. They soon agreed and said my overall flow was good.",
                "All of the participants were very satisfied with the experience of shopping for this specific task. They said the site was clear and were able to find the things they needed fast. Which I believe that my usability testing and my prototypes succeed."
            ]
        }
    }

    const research = {
        goals: [
            "Understand the market for online shopping, and find out how competitors are solving problems.",
            "Identify what makes the user want to shop online.",
            "Identify the user's shopping pattern. (Find out the underlying problem with online shopping)",
            "Identify what demographic group likes to shop online.",
            "Identify when users like to shop online, and when they like to shop in store.",
            "Understands the pros and cons of online shopping from the user's point of view."
        ],
        primaryResearch: "Four participants were interviewed",
        table: {
            header: ["Participant A", "Participant B", "Participant C", "Participant D"],
            body: [
                {
                    age: 53,
                    gender: 'Female',
                    role: 'Teacher'
                },{
                    age: 24,
                    gender: "Female",
                    role: "Grad-student"
                },{
                    age: 23,
                    gender: "Female",
                    role: "College grad"
                },{
                    age: 25,
                    gender: "Male",
                    role: "Software engineer"
                }
            ]
        },
        similarities: [
            "Online shopping is more convenient than going in store.",
            "All of the tested users love sales from the cheaper websites.",
            "They all believe sites that are always on sale are a hit or miss with the quality and size, so they are afraid to try.",
            "Everyone cares about quality over price.",
            "Biggest cons are not being true to size and bad quality.",
            "Everyone dislikes the expensive shipping price and the long shipping time.",
            "All participants think the size chart helps a lot."
        ],
        differences: [
            "Three out of four participants believe virtual try on will make a difference.",
            "Females care more about the styling of the clothes, while males are okay with plain, single colored clothes.",
            "Two users care about free return because they feel secure when shopping online. The other two users like my male participant didn’t care because he never returns things even if there is a problem."
        ],
        marketResearch: [
            "We are targeting sites that sell low cost but good quality clothing. So I targeted online shopping sites like Shein, Romewe, and Wish.",
            "The biggest similarity about those sites are they are always on sale.",
            "What makes them different is their wardrobe collection, shipping time and return policies.",
            "Shein is using a rewarding program. The amount of money you spent will become reward points, and every review you write will be 10 points. The points you collected will become real money discounts at the checkout.",
            "So far no company is using a virtual try-on feature.",
            "I am looking to do more research about how companies like these are making money."
        ],
        competitor: "I shortlisted five competitors for comparison. I found the following practices that are beneficial for my website: free shipping (over a certain amount of $) and return; size chart; pick up option available; brand magazine; often brand promotions."
    };

    const define = {
        taskflow: "I created a task flow where my persona Lily wants to buy a T-shirt from Mirror."
    }

    const design = {
        wireframes: [wireframe_1, wireframe_2, wireframe_3, wireframe_4, wireframe_5],
        ui_design: ui_design_1,
        hi_fi_wireframes: [hi_fi_wireframe_1, hi_fi_wireframe_2, hi_fi_wireframe_3, hi_fi_wireframe_4, hi_fi_wireframe_5, hi_fi_wireframe_6, hi_fi_wireframe_7, hi_fi_wireframe_8, hi_fi_wireframe_9]
    }

    const generateOverview = function () {
        return (
            <div className="project-overview">
                <div className="overview-title title">OVERVIEW</div>
                <div className="sectionBody goal">
                    <label>Overall goal: </label>
                    <div className="overview-text">{overview.goal}</div>
                </div>
                <div className="sectionBody statement">
                    <label>Probelm statement: </label>
                    <div className="overview-text">{overview.statement}</div>
                </div>
                <div className="sectionBody role">
                    <label>My role: </label>
                    <span className="overview-text">{overview.role}</span>
                </div>
                <div className="sectionBody duration">
                    <label>Duration: </label>
                    <span className="overview-text">{overview.duration}</span>
                </div>
                <div className="sectionBody note">
                    <sup>*</sup>
                    <span className="overview-text">{overview.note}</span>
                </div>
            </div>
        );
    };

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

    const researchCompare = function () {
        return (
            <div className="research-compare-section">
                <div className="research-similarities">
                    <div>Similarities</div>
                    <ul>{research.similarities.map((x, i)=>{return(<li key={"similarities-"+i}>{x}</li>)})}</ul>
                </div>
                <div className="research-different">
                    <div>Differences</div>
                    <ul>{research.differences.map((x, i)=>{return(<li key={"differences-"+i}>{x}</li>)})}</ul>
                </div>
            </div>
        );
    };

    const generateImageGroup = function () {
        return (
            <>
                {competitorLogoGroup.map((x, i)=>{return (
                    <div className="competitorLogo" key={"competitorLogo-"+i}>
                        <img src={x}/>
                    </div>
                )})}
            </>
        );
    };
    
    const generateProcess = function () {
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
                    <div className="table-description">Here are my findings after the interviews.</div>
                    {researchCompare()}
                </div>

                <div className="sectionBody secondaryResearch">
                    <label>Secondary Research:</label>
                    <div className="secondaryResearch-list marketResearch">
                        <div style={{marginTop:"12px"}}>Market Research:</div>
                        <ul>{research.marketResearch.map((x, i)=>{return (<li key={"marketResearch-"+i}>{x}</li>)})}</ul>
                    </div>

                    <div className="secondaryResearch-list competitor">
                        <div style={{marginTop:"12px", marginBottom:"12px"}}>Competitors:</div>
                        <div className="overview-text">{research.competitor}</div>
                    </div>
                </div>

                <div className="research-image-group">
                    {generateImageGroup()}
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
                    {generateImageSection("User persona", USER_PERSONA)}
                    {generateImageSection("Empathy map", EMPATHY_MAP)}    
                </div>
            </div>
        );
    };

    const generateDefine = function () {
        return (
            <div className="project-define">
                <div className="define-title title">DEFINE</div>
                <div className="sectionBody define">
                    <label>Task flow:</label>
                    <div className="overview-text">{define.taskflow}</div>
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
            return (
                <div className="sectionBody design">
                    <label>{name}:</label>
                    {d}
                    <div className="research-image-group">
                        {images.map((x,i)=>{return (<div className={type+"-image"} key={type+'-'+i}><img src={x}></img></div>)})}
                    </div>
                </div>
            );
        }
        return (
            <div className="project-design">
                <div className="design-title title">DESIGN</div>
                {generate('Wireframes', "Low fidelity wireframes", design.wireframes, "wireframe")}
                {/* {generate('UI designs', "", design.ui_design, "ui-design")} */}

                <div className="sectionBody design">
                    <label>UI designs:</label>
                    <div className="research-image-group ui-design">
                        <img className="ui-design-image" src={design.ui_design}></img>
                    </div>
                </div>

                {generate('Hi-fi wireframes', "", design.hi_fi_wireframes, "hi_fi_wireframe")}
            </div>
        );
    }

    const generateTest = function () {
        return (
            <div className="project-test">
                <div className="test-title title">TEST</div>
                <div className="sectionBody test">
                    <label>{test.mfp.label}:</label>
                    <div className="overview-text">{test.mfp.text}</div>
                    <div className="overview-text">Number of participants: {test.mfp.participants}</div>
                    <a href="https://www.figma.com/file/Zu93IQqf0UO0HZ1BjwxuLV/UXA?node-id=137%3A225" target="_blank"><div className="view-prototype">View Prototype Here</div></a>
                </div>


                <div className="sectionBody test">
                    <label>{test.tf.label}:</label>
                    <div className="overview-text">{test.tf.text}</div>
                    <ul>
                        {test.tf.list.map((x, i)=>{return(<li key={"tf-"+i}>{x}</li>)})}
                    </ul>
                    
                </div>
            </div>
        );
    }

    const generateConclusion = function () {
        return (
            <div className="project-conclusion">
                <div className="conclusion-title title">CONCLUSION</div>
                <div className="sectionBody conclusion">
                    <div className="overview-text">{conclusion.text}</div>
                    <div className="overview-text ending"><b>{conclusion.ending}</b></div>
                </div>
            </div>
        );
    }

    return (
        <div className="case-study-container mirror">
            <div className="prject-header-background">
            <div className="project-body-title">MIRROR</div>
                <div className="header-image">
                    <img src={Mirror_Mock_Up}/>
                </div>
            </div>

            <div className="project-body">
                {generateOverview()}
                {generateProcess()}
                {generateEmpathize()}
                {generateDefine()}
                {generateDesign()}
                {generateTest()}
                {generateConclusion()}
            </div>
        </div>
    )
};

export default Mirror;