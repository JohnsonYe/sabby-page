import React from 'react';
import '../style/home.css';
import PersonalImage from '../images/mochi_compressed.png';
import PersonalImageBackgroud from '../images/bb_cover.png';
import BorderContainer from '../components/BorderAnimation';
import ghtb_cover from '../images/ghtb_cover.png';
import chase_cover from '../images/chase_cover.png';
import tpd_cover from '../images/tpd_cover.png';
import { Link } from 'react-router-dom';

const Home = function() {
    const generateProject = function (title, descrption, redirectUrl) {
        return (
            <div className="class-info">
                <div className="project-title header-l">{title}</div>
                <div className="project-description paragraph-l">{descrption}</div>
                <Link to={redirectUrl} className="nav-link" onClick={()=>scrollToTo()} style={{fontSize: "18px"}}>View Case Study</Link>
            </div>
        );
    }

    const projects = [
        {
            name: "The Product Designer",
            description: "An all in one mobile app exclusively designed for the product designers",
            url: "/projects/the-product-designer",
            background_image: tpd_cover
        },
        {
            name: "Go Heart Tea Bar",
            description: "A responsive boba site that made your boba experience even better.",
            url: "/projects/go-heart-tea-bar",
            background_image: ghtb_cover
        },
        {
            name: "Chase",
            description: "Personal budgeting with no hesitation.",
            url: "/projects/chase",
            background_image: chase_cover
        },
    ];

    function scrollToTo() {
        window.scrollTo(0, 0);
    }




    return (
        <div className="home-container" id="home-container-id">
            <div className="introduction-container">
                <div className="image-section">
                    <img className="personal-image" src={PersonalImageBackgroud} />
                    <div className="layer"></div>
                    {/* <BorderContainer projectURL={PersonalImageBackgroud} /> */}
                    <div className="intro-text-section">
                        <div className="intro-title header-m">HELLO! I AM SABRINA</div>
                        <div className="intro-description header-m">
                            <div><b className="header-l kinda-bold">I create user friendly designs</b></div>
                            <div className="small-line-space"></div>
                            <div><b className="header-l kinda-bold">& I love cats</b></div>
                        </div>
                    </div>
                    
                </div>
                {/* <div className="intro-section">
                    <div className="intro-title header-m">HELLO! I AM SABRINA</div>
                    <div className="intro-description header-m">
                        <div><b className="header-l kinda-bold upper">I create user friendly designs</b></div>
                        <div className="small-line-space"></div>
                        <div><b className="header-l kinda-bold upper">& I love cats</b></div>
                    </div>
                </div> */}
                {/* <div className="personal-image-overview">
                    <img className="personal-image" src={PersonalImageBackgroud}/>
                    
                    <div className="personal-image-text">I Create User Friendly Designs & I Love Cats</div>
                </div> */}
            </div>
            
            <div className="project-title-category header-l">Projects</div>
            <div className="project-list">
                {projects.map((project, i) => {
                    return (
                        <div className="project-item" key={"project-list-"+i}>
                            <Link to={project.url} className="nav-link flex-item-left" onClick={()=>scrollToTo()}><BorderContainer bg_image={project.background_image}/></Link>
                            {/* <BorderContainer projectURL={project.url} /> */}
                            <div className="right flex-item-right">
                                {generateProject(project.name, project.description, project.url)}
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* <Bobo/> */}
        </div>
    )
};

export default Home;