// Restrics
import React from "react";
import OverviewComponent from '../../components/CaseStudy/overview';
import GoalAndRole from '../../components/CaseStudy/goalAndRole';
import Research from '../../components/CaseStudy/research';
import Define from '../../components/CaseStudy/define';
import Empathize from '../../components/CaseStudy/empathize';
import Design from '../../components/CaseStudy/design';
import TestSection from '../../components/CaseStudy/testSection';
import FinalDesign from '../../components/CaseStudy/finalDesign';
import NextStep from '../../components/CaseStudy/nextStep';

// style
import '../../style/caseStudy.css';
import '../../style/caseStudy/tpd.css';

// image
import oswegoLovelyPets_persona from '../../images/oswegoLovelyPets/persona.webp';
import oswegoLovelyPets_mid_fi from '../../images/oswegoLovelyPets/MID_FI/mid_fi1.webp';
import oswegoLovelyPets_final_design from '../../images/oswegoLovelyPets/Final_Hi_Fi/final_design.webp';
import oswegoLovelyPets_prototype_image from '../../images/oswegoLovelyPets/COVER.webp';
import oswegoLovelyPets_empathy_map from '../../images/oswegoLovelyPets/empathy_map.webp';
import tpd_lo_fi_1 from '../../images/oswegoLovelyPets/LO_FI/1.webp';
import tpd_lo_fi_2 from '../../images/oswegoLovelyPets/LO_FI/2.webp';
import tpd_lo_fi_3 from '../../images/oswegoLovelyPets/LO_FI/3.webp';
import oswegoLovelyPets_customer_journey_map from '../../images/oswegoLovelyPets/customer_journey_map.webp';
import oswegoLovelyPets_testresults from '../../images/oswegoLovelyPets/testresults.webp';

export default function() {
    
    const overview = {
        goals: [
            "The users are able to log in once through the study buddy web page and access most of the school learning software like Canvas, Blackboard, and Discord. The students are also able to directly go to the school’s Panfield Library page to access the books and articles."
        ],
        statement: 'This project aim to build a responsive mobile app from scratch.  This application should offer users to use features like apply for a job, share work, and sign up for events all related to product design.',
        // role: 'UX/UI Designer with total use of 80 hrs.',
        duration: '4 weeks',
        note: 'This is a fictional project for Ux boot camp.',
        prototype: "https://www.figma.com/proto/tEGEGShsxzzJEL3b1PJgDs/Figma-101?page-id=594%3A2&node-id=599%3A3&viewport=241%2C48%2C0.5&scaling=min-zoom&starting-point-node-id=599%3A3&show-proto-sidebar=1",


        projectBackground: "Pet owners often gets very worried when traveling away from home and leaving their pets alone. In addition, sending home pets to pet hotels often creates more anxiety and stress. Is there a solution where the pet can stay home and be taken care of simultaneously? This project is to find a solution for the pet owners.",
        goal: "To create an mobile application that the user can easily find pet sitters around the area. The user may create an account and register their pets, and search for sitter by entering detailed information.",
        problemStatement: "Design a mobile application where pet owners can trustfully find pet sitters to take care of their pets when they are away from home.",
        role: "UX/UI Designer",
        imageStyle: {
            width: "100%"
        },
        goalImageBackgroundStyle: {
            backgroundColor: "#F6D5B5"
        }
    };

    const empathize = {
        empathyDescription: "After defining the goals, I created an empathy map based on my possible user’s saying, doing, feeling, and thinking. After that, I created a user persona named Chris, who has a busy life being a event coordinator. Chris often needs help taking care of his pets, finding a trust worthy and good pet sitting app is very crucial to him.",
        empathyMapImage: oswegoLovelyPets_empathy_map,
        personaImage: [oswegoLovelyPets_persona],
        imageStyle: {
            width: "auto",
            height: "100%"
        }
    };

    const define = {
        storyMapTitle: "User story map",
        customeDefineTaskTitle: "",
        taskflows: [],
        taskflowDescription: "Next, I created a user story map to list out all of the necessary steps needed for the users to use the application.",
        customerJourneyMap: "Here I created a user story map to focus on the task from logging in to getting citations of a book from the library’s site.",
        customerJourneyMapImage: oswegoLovelyPets_customer_journey_map
    };

    const design = {
        lowFidelity: {
            images: [tpd_lo_fi_1, tpd_lo_fi_2, tpd_lo_fi_3],
            description: "I sketched out 2 versions of the lo-fi wireframes and got some feedback from my classmates. The showing is the final version chosen.",
            imageStyle: {
                width: "auto",
                height: "100%"
            }
        },
        midFidelity: {
            images: [oswegoLovelyPets_mid_fi],
            description: "After sketching, I digitized the wireframes by using Figma, and made some small adjustments. Here are the results.",
            imageStyle: {}
        },
        UIDeign: null,
        conclusion: null,
    }

    const test = {
        description: "",
        listDescription: "I created three user tasks for my participant to do during the test. Here are the three tasks",
        goalList: [
            "You are looking for a pet sitter for your cat, please sign in and find a pet sitter by filling in some information and sending a request!",
            "Perfect! After request, please go to messages and send the sitter a message!",
            "Lastly, please go to my request page and make a payment to the sitter"
        ],
        testResult: oswegoLovelyPets_testresults,
        imageStyle: {
            width: "80%",
            height: "auto"
        }
    };

    const finalDesign = [oswegoLovelyPets_final_design];

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
        finalContent: ""
    }

    return (
        <div className="case-study-page caseStudyContainer">
            <OverviewComponent className="tpd-Overview" overview={overview} projectName="Lovely Pets"/>
            <GoalAndRole
                className="tpd-Goal"
                overview={overview}
                image={oswegoLovelyPets_prototype_image}/>
            {/* <Research
                className="tpd-research"
                research={research}/> */}
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
        </div>
    )
}