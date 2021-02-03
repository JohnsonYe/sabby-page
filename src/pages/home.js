import React from 'react';
import '../style/home.css';
import PersonalImage from '../images/mochi_compressed.png';
import BorderContainer from '../components/BorderAnimation';
import { Link } from 'react-router-dom';

const Home = function() {
    const generateProject = function (title, descrption, redirectUrl) {
        return (
            <div className="class-info">
                <div className="project-title header-l">{title}</div>
                <div className="project-description paragraph-m">{descrption}</div>
                <Link to={redirectUrl} className="nav-link" onClick={()=>scrollToTo()}>View Case Study</Link>
            </div>
        );
    }

    const projects = [
        {
            name: "MIRROR",
            description: "A responsive E-commerce website and rebrand for a better online shopping experiences.",
            url: "/projects/mirror"
        },
        {
            name: "Project 2",
            description: "Project 2 Description.",
            url: "/"
        },
        {
            name: "Project 3",
            description: "Project 3 Description.",
            url: "/"
        },
    ];

    function scrollToTo() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="home-container">
            <div className="introduction-container">
                <div className="image-section">
                    <img className="personal-image" src={PersonalImage} />
                </div>
                <div className="intro-section">
                    <div className="intro-title header-m">HELLO! I AM SABRINA</div>
                    <div className="intro-description header-m">
                        {/* <div>A
                            <b className="header-l semi-bold"> UX/UI designer </b> 
                            who uses 
                            <b className="header-l semi-bold"> Research </b>
                            and
                            <b className="header-l semi-bold"> Empathy </b>
                        </div>
                        <div>to create
                            <b className="header-l semi-bold"> Easy to use </b>
                            and
                            <b className="header-l semi-bold"> Beautiful </b>
                        </div>
                        <div>digital experiences.</div> */}
                        <div><b className="header-l kinda-bold upper">I create user friendly designs</b></div>
                        <div className="small-line-space"></div>
                        <div><b className="header-l kinda-bold upper">& I love cats</b></div>
                    </div>
                </div>
                
            </div>
            <div className="project-title-category header-l">Projects</div>
            <div className="project-list">
                {projects.map((project, i) => {
                    return (
                        <div className="project-item" key={"project-list-"+i}>
                            <Link to={project.url} className="nav-link" onClick={()=>scrollToTo()}><BorderContainer /></Link>
                            {/* <BorderContainer projectURL={project.url} /> */}
                            <div className="right">
                                {generateProject(project.name, project.description, project.url)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Home;