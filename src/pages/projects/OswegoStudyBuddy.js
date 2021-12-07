import React from "react";
// Restrics
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
import oswegoStudyBuddy_prototype_image from '../../images/oswegoStudyBuddy/test.webp';
import tpd_competitor_analysis from '../../images/tpd/competitor_analysis.webp';
import oswegoStudyBuddy_empathy_map from '../../images/oswegoStudyBuddy/empathy_map.webp';
import oswegoStudyBuddy_persona from '../../images/oswegoStudyBuddy/persona.webp';
import oswegoStudyBuddy_customer_journey_map from '../../images/oswegoStudyBuddy/customer_journey_map.webp';
import oswegoStudyBuddy_mid_fi from '../../images/oswegoStudyBuddy/MID_FI/mid_fi1.webp';
import oswegoStudyBuddy_testresults from '../../images/oswegoStudyBuddy/testresults.webp';
import oswegoStudyBuddy_final_design from '../../images/oswegoStudyBuddy/Final_Hi_Fi/final_design-min.webp';

export default function() {
    
    const overview = {
        goals: [
            "The users are able to log in once through the study buddy web page and access most of the school learning software like Canvas, Blackboard, and Discord. The students are also able to directly go to the school’s Panfield Library page to access the books and articles."
        ],
        statement: 'This project aim to build a responsive mobile app from scratch.  This application should offer users to use features like apply for a job, share work, and sign up for events all related to product design.',
        // role: 'UX/UI Designer with total use of 80 hrs.',
        duration: '1 week',
        note: 'This is a fictional project for Ux boot camp.',
        prototype: "https://www.figma.com/file/tEGEGShsxzzJEL3b1PJgDs/Figma-101?node-id=72%3A2",


        projectBackground: "This design is based on a classmate’s frustration with using the SUNY Oswego learning systems. The school uses a lot of software to enhance students’ learning, but it is also a pain point for the students to manage all the software. Looking at the school’s web pages, they are not very user-friendly. This project is to redesign or create a new platform to fix students’ pain points.",
        goal: "Users may create a profile with their portfolio attached in this app. The users can also search and add other designers and companies to share experience and have private conversations. Most importantly, employers can post up jobs to hire the designers!",
        problemStatement: "To redesign or design a learning platform that the students of SUNY Oswego use to enhance their study experience. The platform should offer ease for users to log in only once to access most of the learning software.",
        role: "UX/UI Designer",
        imageStyle: {
            width: "100%"
        }
    };

    const research = {
        goals: [
            "Understand the user’s pain point when studying in general.",
            "Understand the user’s pain point when using schooling software.",
            "Identify the features that are necessary to make changes.",
            "Understand whether redesigning will make a difference or not."
        ],
        researchGoalAnalysis: "Before I interviewed my classmate, I wrote down my goals for the interview and some research questions:",
        primaryResearchAnalysis: "One classmate is being interviewed for this project since we are designing for each other. She is a graduate student studying Human-Computer Interaction at SUNY Oswego. She is perfect for this interview because she is in her last semester of school and she has experienced all the online learning at Oswego.",
        sampleInterviewQuestions: [
            "What does your typical day look like?",
            "What are your gain and pain points towards education or studying here at the SUNY?",
            "What are some apps or websites you use often? Why do you like about them?",
            "How do you feel about blackboard? What do you like and dislike about it?",
            "If you can change something on the blackboard. What would you change?,"
        ],
        interviewers: [
            {
                name: "Participant A",
                age: null,
                major: "HCI",
                gender: 'Female',
                role: 'Graduate student'
            }
        ],
        researchFindingDescription: "After the interviews, I wrote up 5 points that I thought would be useful for my designs:",
        interviewFinding: [
            "She thinks it was very hard to be an online student before covid 19 since the school is not doing well with organizing online resources. Covid has made everything better-resourced-wise.",
            "She believes the school uses way too much learning software which confuses her. It is very hard to keep track of her classes from different platforms.",
            "Blackboard is definitely the hardest to use out of all the ones that school uses. It is broken all the time and it is not user-friendly at all.",
            "She dislikes the library page, it is very confusing and sometimes requires us to keep signing in to the page. The homepage of the site is very unorganized.",
            "She is very bad with audio and numbers. She prefers reading over other types of study sources. "
        ],
        surveyImage: null,
        surveyDescription: null,
        survey: [],
        differences: [],
        secondaryResearchDescription: null,
        competitorAnalysisImage: tpd_competitor_analysis,
        imageStyle: {}
    };

    const empathize = {
        empathyDescription: "I gained a good insight from my user’s perspective and went on to the next step- an empathy map. I tried to focus on my user’s daily study habits, knowing her frustration, I used empathy to list out her possible doing, thinking, feeling, and saying. After that, I created a user persona named Samantha, who is a college students experiencing a similar study situation as my interviewer.",
        empathyMapImage: oswegoStudyBuddy_empathy_map,
        personaImage: [oswegoStudyBuddy_persona],
        imageStyle: {
            width: "auto",
            height: "100%"
        }
    };

    const define = {
        customeDefineTaskTitle: "Pains & Needs:",
        taskflows: [],
        taskflowDescription: "Next, I list out the pains and needs of my users to finalize my design ideas.",
        painsList: [
            "The interviewee struggles when she needs to log in to many different learning tools for classes.",
            "The Interviewee dislikes the library’s unfriendly interface, and she cannot access scholarly articles all the time.",
            "The interviewee gets annoyed with the unnecessary notifications in Blackboard because she often misses the important ones.",
            "The interviewee struggles with numbers.",
            "The interviewee is bad with audio learning and prefers video or textbook learning."
        ],
        needsList: [
            "An all-in-one log-in access tool where she can log in only once to access all the tools she wants.",
            "A better-designed interface for the blackboard.",
            "A better-designed library site to access scholarly Journals."
        ],
        
        customerJourneyMap: "Here I created a customer journey map to focus on the task from logging in to getting citations of a book from the library’s site.",
        customerJourneyMapImage: oswegoStudyBuddy_customer_journey_map
    };

    const design = {
        lowFidelity: null,
        midFidelity: {
            images: [oswegoStudyBuddy_mid_fi],
            description: "Now the fun part! I created several screens using Figma focusing on the task I did on customer journey map. I focused on designing a home page for the study buddy webpae and redesigning the Panfield Library’s home page. Here are the results.",
            imageStyle: {}
        },
        UIDeign: null,
        conclusion: null,
    }

    const test = {
        description: "I tested my work with three participants. All of the users being tested are recent graduates from university.",
        listDescription: "I had three goals doing a usability test:",
        goalList: [
            "I want to know if the users can successfully finish the task I give them without asking any questions.",
            "I want to see if the users can direct themselves into the right direction if they ever get lost using this website.",
            "I would like to get valuable feedbacks from my users."
        ],
        testResult: oswegoStudyBuddy_testresults,
        imageStyle: {
            width: "80%",
            height: "auto"
        }
    };

    const finalDesign = [oswegoStudyBuddy_final_design];

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
        finalContent: "This was a very interesting project to work on! Interviewing only one classmate feels like creating a personal design is very fun! I am overall satisfied with my design solution, but if I have more time, I would definitely do deeper research and interview more participants to gather more ideas. Besides creating a full prototype, I also want to design a responsive mobile version since as a student myself, I find cellphones to be much quicker to access to. I hope you had fun reading my case study! Thank you and have a wonderful day!"
    }

    return (
        <div className="case-study-page caseStudyContainer">
            <OverviewComponent className="tpd-Overview" overview={overview} projectName="OSWEGO Study Buddy"/>
            <GoalAndRole
                className="tpd-Goal"
                overview={overview}
                image={oswegoStudyBuddy_prototype_image}/>
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
        </div>
    )
}