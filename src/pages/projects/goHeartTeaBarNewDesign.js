import React from "react";
// Restrics
import HeaderComponent from '../../components/CaseStudy/header';
import OverviewComponent from '../../components/CaseStudy/overview';
import GoalAndRole from '../../components/CaseStudy/goalAndRole';
import Research from '../../components/CaseStudy/research';
import Define from '../../components/CaseStudy/define';
import Empathize from '../../components/CaseStudy/empathize';
import Design from '../../components/CaseStudy/design';
import TestSection from '../../components/CaseStudy/testSection';
import FinalDesign from '../../components/CaseStudy/finalDesign';
import NextStep from '../../components/CaseStudy/nextStep';
import SwitchCaseStudyComponent from "../../components/CaseStudy/switchCaseStudy";
// style
import '../../style/caseStudy.css';
import '../../style/caseStudy/ghtb.css';

// elements 
import tpd_overview from '../../images/ghtb/ghtb_casesudy_cover.webp';
import tpd_prototype_image from '../../images/ghtb/test.webp';
import tpd_competitor_analysis from '../../images/ghtb/competitor_analysis.webp';
import tpd_empathy_map from '../../images/ghtb/empathy-map.webp';
import tpd_persona_1 from '../../images/ghtb/persona1.webp';
import tpd_persona_2 from '../../images/ghtb/persona2.webp';
import tpd_taskFlow from '../../images/ghtb/taskflow.webp';
import tpd_mid_fi_1 from '../../images/ghtb/MID_FI/mid_fi1.webp';
import tpd_mid_fi_2 from '../../images/ghtb/MID_FI/mid_fi2.webp';
import tpd_ui_design from '../../images/ghtb/UI_KIT.webp';
import tpd_testresults from '../../images/ghtb/testresults.png';
import tpd_final_design_desktop_1 from '../../images/ghtb/Final_Hi_Fi/final_desktop.webp';
import tpd_final_design_desktop_2 from '../../images/ghtb/Final_Hi_Fi/final_desktop2.webp';
import tpd_final_design_1 from '../../images/ghtb/Final_Hi_Fi/final_design1.webp';
import tpd_final_design_2 from '../../images/ghtb/Final_Hi_Fi/final_design2.webp';
// import tpd_define_image
export default function() {
    const overview = {
        // role: 'UX/UI Designer with total use of 80 hrs.',
        duration: '80 hrs',
        prototype: "https://www.figma.com/proto/Zu93IQqf0UO0HZ1BjwxuLV/UXA?node-id=417%3A1456&viewport=630%2C542%2C0.25&scaling=min-zoom&fbclid=IwAR3gWNJskGDx_OQ1v-VhoiclpuCCrmT0zAlS35npwwrRwXhtTTcfjSyDI20",
        projectBackground: "Go Heart Tea Bar is one of the newer private owned boba shops in San Diego. The business opened right before Covid-19 and they could not get the name out of the market and sell because of the change of rules of Covid.  During this down time, they had a very hard time promoting their store while paying extra to partner with third parties to make more sales. Their website as of now is done with Wix template. The overall design and usability was not user friendly, so the business would like to redesign their responsive site and create a system to directly order drinks without a third party delivery service.",
        goal: "The users are able to view the menus and all other information about Go Heart Tea Bar through mobile and desktop web page. And be able to order boba online directly through Go heart Tea Bar’s website without using a third party application.",
        problemStatement: "To build a responsive website (mobile and desktop) for users to view and shop boba directly on Go Heart Tea Bar’s site.  This platform should offer users to be able to view drink menus along with being able to order for pick-up and delivery services.",
        role: "UX/UI Designer"
    };

    const research = {
        goals: [
            "Understand the market for the bubble tea industry.",
            "Understand the market for online food ordering, and how it is different during the pandemic.",
            "Identify what device users like to use the most when ordering food online.",
            "Identify online ordering patterns. (Find out the underlying issue with the online ordering system.)",
            "Identify what demographic group likes to drink bubble tea.",
            "Understand the pros and cons of online food ordering from the user's point of view."
        ],
        researchGoalAnalysis: "After getting some brief into this project, I can now start my research. I wanted to achieve 6 goals after the research, and they are:",
        primaryResearchAnalysis: "I wanted to get some more information from interviewing different types of boba drinkers. Since I am focusing on redisgning their web page and adding a online order feature, I found four participants who have had boba drinks and also used a online ordering services before.",
        interviewers: [
            {
                name: "Participant A",
                age: 25,
                gender: 'Male',
                role: 'Heavy Boba Drinker'
            },{
                name: "Participant B",
                age: 28,
                gender: "Male",
                role: "Newbie Boba Drinker"
            },
            {
                name: "Participant C",
                age: 25,
                gender: 'Female',
                role: 'Occasional Drinker'
            },{
                name: "Participant D",
                age: 25,
                gender: "Female",
                role: "Heavy Boba Drinker"
            }
        ],
        researchFindingDescription: "I got a lot of information from the four interviews and I gathered the most important information to help me better my design.",
        interviewFinding: [
            "All four of the participants uses cell phone when ordering food online.",
            "Every participant prefers to tip the driver after delivery.",
            "Everyone cared about the food making time and delivery time.",
            "Three participants likes to call in and order togo, but one participant likes to order online.",
            "Three participants likes to track their order through text messages. One likes to track online."
        ],
        surveyImage: null,
        surveyDescription: null,
        survey: null,
        differences: [],
        secondaryResearchDescription: "Since this boba shop is located in San Diego, I researched the most popular boba shops in San Diego. I went on their website to gain some design ideas and also to see how do they handle their online ordering services. In the below, I wrote down some ideas that I can possibly to include in my deisgn.",
        competitorAnalysisImage: tpd_competitor_analysis,
        imageStyle: {}
    };

    const empathize = {
        empathyDescription: "After synthesizing my research, it was time to move on to next steps. I created two personas, Jared and Jennifer. Jared and Jennifer are both boba lovers and during the pendamic they often orders online delivery services to save their time and be safe from the Covid-19 situation.",
        empathyMapImage: tpd_empathy_map,
        personaImage: [tpd_persona_1, tpd_persona_2],
        imageStyle: {
            width: "80%",
            height: "auto"
        }
    };

    const define = {
        taskflows: [
            {
                image: tpd_taskFlow,
                description: ["Jared wants to purchase two boba drinks for delivery to his house on Go Heart Tea Bar’s website."]
            }
        ],
        taskflowDescription: "From talking to the owner of Go Heart Tea Bar,  we both agreed to focus on the online delivery feature. So I created one task flow to make sure my design has a easy and smooth flow."
    };

    const design = {
        lowFidelity: null,
        midFidelity: {
            images: [tpd_mid_fi_1, tpd_mid_fi_2],
            description: "I used Figma to digitize my design, I focused on mobile design because based on my research, most of the users likes to use their cell phone instead of desktop to order food.",
            imageStyle: null,
            imageStyles: [
                {
                    width: "100%",
                    height: "auto",
                    top: "120%"
                },
                {
                    width: "100%",
                    height: "auto",
                    top: "70%"
                }   
            ]
        },
        UIDeign: {
            image: tpd_ui_design,
            imageStyle: {
                width: "80%",
                height: "auto"
            }
        },
        conclusion: "Finally I added all my beautiful UI designs into my wireframes. I always like to create prototypes with hi-fi wireframes becuase I want my users to feel more realistic when testing out my products.  The final hi fideslity Design will be shown after the usability testing section.",
    }

    const test = {
        description: "I tested my product with three participants. They are all age range from 18-25 years old. All of the participants had boba before and had used food delivery service before. All three participants said that they were very satisfied with the overall experience of my site. Here are the similarities and differences that I found after the testing.",
        listDescription: "I had four goals doing a usability test:",
        goalList: [
            "I want to know if the users are able to navigate to all pages successfully without asking any questions.",
            "I want to know if the users can order an online boba for delivery with no confusion.",
            "I want to see if the users can direct themselves into the right direction if they ever get lost using this app.",
            "I would like to get valuable feedbacks from my users about the overall flow and UI."
        ],
        testResult: tpd_testresults,
        imageStyle: {
            width: "80%",
            height: "auto"
        }
    };

    const finalDesign = {
        mobile: [
            {
                type: "mobile",
                image: tpd_final_design_1,
                imageStyle: {}
            },
            {
                type: "mobile",
                image: tpd_final_design_2,
                imageStyle: {}
            }
        ],
        desktop: [
            {
                type: "desktop",
                image: tpd_final_design_desktop_1,
                imageStyle: {
                    width: "100%",
                    height: "auto",
                    top: "105%"
                }
            },
            {
                type: "desktop",
                image: tpd_final_design_desktop_2,
                imageStyle: {
                    width: "100%",
                    height: "auto",
                    top: "105%"
                }
            }
        ]
    };

    const nextSteps = {
        description: "There are many more steps that I need to take on inorder to make this application fully user friendly and come to life.",
        body: [
            {
                header: "Client handoff",
                contents: ["Present the work to the client to get feedback. If everything is good, then the owner can start to look for developers tobuilding their website."]
            },
            {
                header: "More testings",
                contents: ["Gather more usability testers for more feedback and iterations."]
            }
        ],
        finalContent: "I loved doing this project! This my first project where I got to work with a real world business! I enjoyed doing research and designing because I am also a boba lover who orders online delivery services all the time. Another great thing was to be able to talk to a real world stakeholder like the owner of Go Heart Tea Bar, I felt that my designs process were a lot easier when I get to know what exactly the steak-holder wants. One thing is that I only had 2 weeks to finish this project so I did not have time to focus on the desktop version, I would love to continue to work on this project and hopefully I get to see my design go live someday.  Thank you for reading this far! I hope you have a wonderful day!"
    }
    
    return (
        <div className="case-study-page caseStudyContainer">
            <HeaderComponent className="ghtb-Cover" image={tpd_overview} />
            <OverviewComponent className="ghtb-Overview" overview={overview} projectName="Go Heart Tea Bar"/>
            <GoalAndRole
                className="ghtb-Goal"
                overview={overview}
                image={tpd_prototype_image}/>
            <Research
                className="ghtb-research"
                research={research}/>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <Empathize
                    className="ghtb-empathize"
                    empathize={empathize}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <Define
                    className="ghtb-define"
                    define={define}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <Design
                    className="ghtb-design"
                    design={design}
                />
            </section>
            
            <div className="divider div-transparent div-arrow-down"></div>

            <section className="sectionTag">
                <TestSection
                    className="ghtb-test"
                    test={test}
                    prototype={overview.prototype}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <FinalDesign
                    className="ghtb-finalDesign"
                    finaldesign={finalDesign}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <NextStep
                    className="ghtb-nextStep"
                    nextSteps={nextSteps}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <SwitchCaseStudyComponent
                    leftComponent={{
                        path: "/projects/the-product-designer",
                        name: "The Product Designers"
                    }}
                    rightComponent={{
                        path: "/projects/chase",
                        name: "Chase"
                    }}
                />
            </section>
        </div>
    )
};
