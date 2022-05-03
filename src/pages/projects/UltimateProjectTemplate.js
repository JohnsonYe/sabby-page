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
import SwitchCaseStudyComponent from '../../components/CaseStudy/switchCaseStudy';
// style
import '../../style/caseStudy.css';
import '../../style/caseStudy/tpd.css';

// if (localStorage.getItem('tpd_cover_image')) {
//     var tpd_overview = localStorage.getItem('tpd_cover_image');
// } else {
import tpd_overview from '../../images/tpd/tpd_overview.webp';    
// }

// import tpd_overview from '../../images/tpd/tpd_overview.webp';
import tpd_prototype_image from '../../images/tpd/test.webp';
import tpd_survey_image from '../../images/tpd/tpdsurvey.webp';
import tpd_competitor_analysis from '../../images/tpd/competitor_analysis.webp';
import tpd_empathy_map from '../../images/tpd/empathy_map.webp';
import tpd_persona from '../../images/tpd/persona.webp';
import tpd_taskFlow_1 from '../../images/tpd/taskflow_1.webp';
import tpd_taskFlow_2 from '../../images/tpd/taskflow_2.webp';
import tpd_lo_fi_1 from '../../images/tpd/LO_FI/1.png';
import tpd_lo_fi_2 from '../../images/tpd/LO_FI/2.png';
import tpd_mid_fi from '../../images/tpd/MID_FI/mid_fi.webp';
import tpd_ui_design from '../../images/tpd/UI_KIT.webp';
import tpd_testresults from '../../images/tpd/testresults.webp';
import tpd_final_design from '../../images/tpd/Final_Hi_Fi/final_design-min.webp';

// import tpd_define_image
export default function() {
    const overview = {
        goals: [
            "Users may create a profile with their portfolio attached in this app. The users can also search and add other designers and companies to share experience and have private conversations. Most importantly, employers can post up jobs to hire the designers!",
            "We want to connect all the product designers! Grow as a community, as a whole."
        ],
        statement: 'This project aim to build a responsive mobile app from scratch.  This application should offer users to use features like apply for a job, share work, and sign up for events all related to product design.',
        // role: 'UX/UI Designer with total use of 80 hrs.',
        duration: '80 hrs',
        note: 'This is a fictional project for Ux boot camp.',
        prototype: "https://www.figma.com/proto/Zu93IQqf0UO0HZ1BjwxuLV/UXA?node-id=661%3A1&viewport=797%2C424%2C0.2597874701023102&scaling=min-zoom",


        projectBackground: "There are currently more than 1.74 billion websites in existence, and more than 4 million apps available for download. The market of product design has been growing, therefore having an app just for the designers can be beneficial. We want to connect all the product designers out there so we can all grow as a community, as a whole.",
        goal: "Users may create a profile with their portfolio attached in this app. The users can also search and add other designers and companies to share experience and have private conversations. Most importantly, employers can post up jobs to hire the designers!",
        problemStatement: "This project aim to build a responsive mobile app from scratch.  This application should offer users to use features like apply for a job, share work, and sign up for events all related to product design.",
        role: "UX/UI Designer"
    };

    const research = {
        goals: [
            "Understand if the designers will use this app and think is convenient.",
            "Understand what features the designers really need and expect in this app.",
            "Identify the competitors in job finding and UX related applications.",
            "Identify what other features should be added for this app.",
            "Understand from the employer users perspective and their needs."
        ],
        researchGoalAnalysis: "After having the idea down, I needed to deepen my understanding and discover how to design this app in the best way, here are my 5 goals:",
        primaryResearchAnalysis: "I interviewed two participants who are currently working as a product designer to see what are their thoughts on this mobile application. I also created a survey and  I had 7 participants who gave me great opinions.",
        interviewers: [
            {
                name: "Participant A",
                age: 23,
                gender: 'Female',
                role: 'Product Designer'
            },{
                name: "Participant B",
                age: 24,
                gender: "Male",
                role: "Product Designer"
            }
        ],
        researchFindingDescription: "After the interviews, I wrote up 5 points that I thought would be useful for my designs:",
        interviewFinding: [
            "Both of the participants are currently a product designer with a job and with minimum 2 years of experience.",
            "Both of the participants expected this app to be a community app like reddit.",
            "One participant find value in this app while the other believes that there are already many platforms that does the same thing and it has a strong stand in the industry.",
            "Both of the participants believes that there will be no downside for the new job searching apps because different person has different preferences.",
            "One participant cared about the app for having connection and mass apply like Indeed, while the other cared more about able to find jobs for newbies with no experience."
        ],
        surveyImage: tpd_survey_image,
        surveyDescription: "The survey also gave me a better understandings of what do my users really want!",
        survey: [
            "67.5% of the participants said they would download this app after knowing the features of this app.",
            "87.5% of the participants said they share their work on other platforms and also likes to view other’s work as insipration.",
            "5 out of 7 participants said they wish the sharing work feature could look like Instagram."
        ],
        differences: [
            "Three out of four participants believe virtual try on will make a difference.",
            "Females care more about the styling of the clothes, while males are okay with plain, single colored clothes.",
            "Two users care about free return because they feel secure when shopping online. The other two users like my male participant didn’t care because he never returns things even if there is a problem."
        ],
        secondaryResearchDescription: "The conversations in the 1:1 interviews helped me understand my directions better. I tried to find competitors online but there are currenttly no app like this exist yet. So I researched top companies for job searching, making connections, and messaging.",
        competitorAnalysisImage: tpd_competitor_analysis,
        imageStyle: {}
    };

    const empathize = {
        empathyDescription: "After synthesizing my research, it was time to move on to next steps. I created a persona based on all my research findings. Meet Celine! She is a recent graduate wanting to be in the product design field.  She just finished her portfolio build-up and all ready for job hunting, but she is lacking connections and a good platform to find a good job until she finds The Product Designer app...",
        empathyMapImage: tpd_empathy_map,
        personaImage: [tpd_persona],
        imageStyle: {
            width: "auto",
            height: "100%"
        }
    };

    const define = {
        taskflows: [
            {
                image: tpd_taskFlow_1,
                description: ["Celine is a user who already has an account, and would like to apply for a UX Designer job by using the one-click apply feature."]
            },
            {
                image: tpd_taskFlow_2,
                description: ["Celine is a user who already has an account, and would like to sign up for a new webinar that is happening tomorrow virtually."]
            }
        ],
        taskflowDescription: "After creating the persona and knowing her pains and gains, I created two tasks that I would like my persona to complete. Here are my two tasks:"
    };

    const design = {
        lowFidelity: {
            images: [tpd_lo_fi_1, tpd_lo_fi_2],
            description: "I first sketched out the four screens that are the most important for my design. I used all the knowledge I gained from my research and created a general idea of how I wanted my app to look like.",
            imageStyle: {
                width: "auto",
                height: "100%"
            }
        },
        midFidelity: {
            images: [tpd_mid_fi],
            description: "Now the fun part! I used Figma to creat my wireframes. After receiving feedbacks from my mentor, I added another section in my menu bar. I wanted the app to give a cool and high-tech feeling so I decided to have a dark background theme for The Product Designers.",
            imageStyle: {}
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
        description: "I tested my work with two participants. All of the users being tested are either studying product design or is already a product designer.",
        listDescription: "I had three goals doing a usability test:",
        goalList: [
            "I want to know if the users can successfully finish the task I give them without asking any questions.",
            "I want to see if the users can direct themselves into the right direction if they ever get lost using this app.",
            "I would like to get valuable feedbacks from my users."
        ],
        testResult: tpd_testresults,
        imageStyle: {
            width: "80%",
            height: "auto"
        }
    };

    const finalDesign = [tpd_final_design];

    const nextSteps = {
        description: "There are many more steps that I need to take on inorder to make this application fully user friendly and come to life.",
        body: [
            {
                header: "Create a full prototype",
                contents: ["I want to create a full prototype where everything is clickable to see if my designs are really user friendly or not."]
            },
            {
                header: "More testings",
                contents: ["Gather more usability testers for more feedback and iterations."]
            }
        ],
        finalContent: "This project was a tough one because it is a solo end-to-end project. I had a hard time researching for this project because there are no other similar product out there in the market. But the final results still made me proud, I feel like product designers like me and you both needs an app like this exclusively just made for us. I do not think I did great on researching for this project as I should have interviewed more users to get more helpful opinions on this project, but hopefully I can do that on the next steps! Thank you for reading this far! I hope you have a wonderful day!"
    }

    // let titleBackgroundImage = window.innerWidth <= 760 ? tpd_research_title_background_image_mobile : tpd_research_title_background_image;
    
    return (
        <div className="case-study-page caseStudyContainer">
            <HeaderComponent className="tpd-Cover" image={tpd_overview} />
            <OverviewComponent className="tpd-Overview" overview={overview} projectName="The Product Designers"/>
            <GoalAndRole
                className="tpd-Goal"
                overview={overview}
                image={tpd_prototype_image}/>
            <Research
                className="tpd-research"
                research={research}/>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <Empathize
                    className="tpd-empathize"
                    empathize={empathize}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <Define
                    className="tpd-define"
                    define={define}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <Design
                    className="tpd-design"
                    design={design}
                />
            </section>
            
            <div className="divider div-transparent div-arrow-down"></div>

            <section className="sectionTag">
                <TestSection
                    className="tpd-test"
                    test={test}
                    prototype={overview.prototype}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <FinalDesign
                    className="tpd-finalDesign"
                    finaldesign={finalDesign}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <NextStep
                    className="tpd-nextStep"
                    nextSteps={nextSteps}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <SwitchCaseStudyComponent
                    leftComponent={{
                        path: "/projects/chase",
                        name: "Chase"
                    }}
                    rightComponent={{
                        path: "/projects/go-heart-tea-bar",
                        name: "Go Heart Tea Bar"
                    }}
                />
            </section>
        </div>
    )
};
