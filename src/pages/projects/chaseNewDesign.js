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
import '../../style/caseStudy/chase.css';

// elements 
import tpd_overview from '../../images/chase/chase_casestudy_cover.webp';
import tpd_prototype_image from '../../images/chase/test.webp';
import tpd_competitor_analysis from '../../images/chase/competitor_analysis.webp';
import tpd_empathy_map from '../../images/chase/empathy_map.webp';
import tpd_persona from '../../images/chase/persona.webp';
import tpd_taskFlow_1 from '../../images/chase/taskflow.webp';
import tpd_lo_fi_1 from '../../images/chase/LO_FI/lofi_1.png';
import tpd_lo_fi_2 from '../../images/chase/LO_FI/lofi_2.png';
import tpd_lo_fi_3 from '../../images/chase/LO_FI/lofi_3.png';
import tpd_mid_fi from '../../images/chase/MID_FI/mid_fi.webp';
import tpd_final_design_1 from '../../images/chase/Final_Hi_Fi/final_design1-min.webp';
import tpd_final_design_2 from '../../images/chase/Final_Hi_Fi/final_design2.webp';
// import tpd_define_image
export default function() {
    const overview = {
        duration: '80 hrs. This is not a real world project!',
        projectBackground: "Chase, owned by JP Morgan, has the mission is to empower customers’ lives by creating engaged, lifelong relationships. They have put a lot of effort in the past on providing the most relevant products for their customers, but now they want to go beyond and not just provide these products, but also tools to help them manage money better. Taking all of this into account, Chase sees an opportunity to make a difference, and help Millennials with their financial challenges.",
        goal: "Users of Chase can be able to use the personal budgeting feature in the mobile app to see their monthly spending stetements,, create multiple saving goals , and set up automatic bill payments and reminders.",
        problemStatement: "To build a responsive budgeting feature in to Chase’s current Mobile app. This Feature should offer users to be able to create their budget and saving goals along with setting bill payment reminders all on the Chase mobile app.",
        role: "UX/UI Designer",
        prototype: "https://www.figma.com/proto/Zu93IQqf0UO0HZ1BjwxuLV/UXA?node-id=585%3A1&viewport=769%2C305%2C0.25&scaling=min-zoom&fbclid=IwAR1UpuNVwdpvljRqhmo5BcMn87QKp9gab07gKZWfrJX3cLAZUA1TzqJj_AA",
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
        researchGoalAnalysis: "After knowing my goals, I started my research process. I first wrote down the following six goals that I would like to achieve after doing the research.",
        primaryResearchAnalysis: "I set up interviews with three participants to gain some thoughts on their experiences with personal budgeting. I purposely interviewed participants who are currently a chase bank member and what were their thoughts on adding a budgeting feature into the mobile application. I also wanted to know if they have used other budgeting applications before and what was their painpoints of using those applications.",
        interviewers: [
            {
                name: "Participant A",
                age: 58,
                gender: 'Male',
                role: 'IT Manager',
            },{
                name: "Participant B",
                age: 30,
                gender: 'Female',
                role: 'Fashion Designer',
            },{
                name: "Participant C",
                age: 32,
                gender: 'Male',
                role: 'Real Estate Agent',
            }
        ],
        researchFindingDescription: "After the interviews, I wrote up 8 points that I thought would be useful for my designs:",
        interviewFinding: [
            "All three of the participants have used online budgeting app before.",
            "All of the participant believes that personal finance management is a very important skill to have.",
            "Two of the participants is still using their current budgeting app. But they both use a third party app.",
            "All of the participants expect a diagram and automatic calculation to tell them exactly how their spendings are.",
            "Only one participant uses an alarm to remind themselves for bill payments.",
            "All participants said it would be great to have the bank push notifications to remind them about paying bills.",
            "All participants worried about security (giving personal information) for using a non banking app.",
            "All of the participants thinks that using the budgeting feature within their bank mobile app is more trustworthy than third party ones."
        ],
        surveyImage: null,
        surveyDescription: null,
        survey: [],
        differences: [
            "Three out of four participants believe virtual try on will make a difference.",
            "Females care more about the styling of the clothes, while males are okay with plain, single colored clothes.",
            "Two users care about free return because they feel secure when shopping online. The other two users like my male participant didn’t care because he never returns things even if there is a problem."
        ],
        secondaryResearchDescription: "After the interviews, I wanted to do some further research about my top competitors and how are they solving their problems.",
        competitorAnalysisImage: tpd_competitor_analysis,
        imageStyle: {
            width: "80%",
            height: "auto"
        }
    };

    const empathize = {
        empathyDescription: "After understanding the users pains and gains, I went on to the next step and created a empathy map and persona. Eric is a young adult working hard away from his home town and wanted to be successful in his field. It is very important to him to learn how to manage his money and create savings for his future.",
        empathyMapImage: tpd_empathy_map,
        personaImage: [tpd_persona],
        imageStyle: {
            width: "80%",
            height: "auto"
        }
    };

    const define = {
        taskflows: [
            {
                image: tpd_taskFlow_1,
                description: [
                    "1. Eric wants to set up a monthly budget",
                    "2. Eric wants to save up to buy a car, so he wants to create a new saving goal for that."
                ]
            }
        ],
        taskflowDescription: "For the next step, I wanted to give my persona two tasks to complete in order to better understand if the users can successfuly use this budgeting feature or not."
    };

    const design = {
        lowFidelity: {
            images: [tpd_lo_fi_1, tpd_lo_fi_2, tpd_lo_fi_3],
            description: "Now we came to my favorite part! I sketched out all the screens that are needed for my design and reviewed them over and over to see if I can make some improvements. I really liked that Chase mobile app has a very clean design, So I followed the design pattern that Chase bank uses and it made my sketching process a lot easier.",
            imageStyle: {
                width: "auto",
                height: "95%"
            }
        },
        midFidelity: {
            images: [tpd_mid_fi],
            description: "I got some feedback from my mentor and digitized my sketches using Figma. I wanted my designs to be as easy to understand as possible for the users. I found out from my research that many users did not like to use budgeting app becuase of its complexcity. I included the diagrams for better visual viewings and I did not want to add to many features to confuse the users.",
            imageStyle: {
                width: "95%",
                height: "auto"
            }
        },
        UIDeign: null,
        conclusion: null,
    }

    const test = {
        description: "I tested my work with three participants. All of the users being tested currently uses Chase bank and their mobile app.",
        listDescription: "Here is what I found after tesing with my users:",
        goalList: [
            "All three of the users thought the whole process of creating a budget and saving goal was very easy and simple.",
            "One of the user who is older and is not familiar with the newest technology thought the flow was smooth and easy because I led her through the whole process, she said if she does it herself it would take more time.",
            "All of the users were not confused about the wording for due dates. They believed it was very straightforward.",
            "Two out of the three users thought the + sign on the editing budget page was a little confusing.",
            "Three out of three users thought the + sign next to the category section was not confusing. And suggested changing the wording on editing budget page to category to maintain consistency.",
            "All of the users gave the same suggestion to put budgeting as a button or section on the homepage instead of only having access from the menu bar."
        ],
        testResult: null
    };

    const finalDesign = [tpd_final_design_1, tpd_final_design_2];

    const nextSteps = {
        description: "There are many more steps that I need to take on inorder to make this application fully user friendly and come to life.",
        body: [
            {
                header: "Continue to work on bill payment design",
                contents: ["I would like to continue on creating new screens to finish the full design."]
            },
            {
                header: "More Testings",
                contents: ["Gather more usability testers for more feedback and iterations."]
            },
            {
                header: "More Feedbacks",
                contents: ["Show my work to other experienced UX designers for extra feedbacks so my design can be improved."]
            }
        ],
        finalContent: "In the beginning, I felt that this project was challenging because I had to follow a design pattern that already exist, but it was also a great opportunity to learn how to add features into an exsiting application. Since myself never used a bugeting app before, I did not know where to start and how to create a good design for the users. After the researching process, I gained more confidence because my interviewees gave me a lot of insights. I would like to continue on receiving feedbacks for this project so I can improve on my design. Thank you for reading this far! I hope you have an amazing day!"
    }

    // let titleBackgroundImage = window.innerWidth <= 760 ? tpd_research_title_background_image_mobile : tpd_research_title_background_image;
    
    return (
        <div className="case-study-page caseStudyContainer">
            <HeaderComponent className="chase-Cover" image={tpd_overview} />
            <OverviewComponent className="chase-Overview" overview={overview} projectName="Chase Bank Mobile"/>
            <GoalAndRole
                className="chase-Goal"
                overview={overview}
                image={tpd_prototype_image}/>
            <Research
                className="chase-research"
                research={research}
                />
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <Empathize
                    className="chase-empathize"
                    empathize={empathize}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <Define
                    className="chase-define"
                    define={define}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <Design
                    className="chase-design"
                    design={design}
                />
            </section>
            
            <div className="divider div-transparent div-arrow-down"></div>

            <section className="sectionTag">
                <TestSection
                    className="chase-test"
                    test={test}
                    prototype={overview.prototype}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <FinalDesign
                    className="chase-finalDesign"
                    finaldesign={finalDesign}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <NextStep
                    className="chase-nextStep"
                    nextSteps={nextSteps}
                />
            </section>
            <div className="divider div-transparent div-arrow-down"></div>
            <section className="sectionTag">
                <SwitchCaseStudyComponent
                    leftComponent={{
                        path: "/projects/go-heart-tea-bar",
                        name: "Go Heart Tea Bar"
                    }}
                    rightComponent={{
                        path: "/projects/the-product-designer",
                        name: "The Product Designers"
                    }}
                />
            </section>
        </div>
    )
};
