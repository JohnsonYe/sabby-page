import React from 'react';
import '../style/home.css';
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
                <Link to={redirectUrl} className="nav-link" onClick={()=>scrollToTop()} style={{fontSize: "18px"}}>View Case Study</Link>
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

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="home-container" id="home-container-id">
            <div className="introduction-container newContainerForChristmaxtree">
                {/* <div className="image-section">
                    <img className="personal-image" src={PersonalImageBackgroud} />
                    <div className="layer"></div>
                    <div className="intro-text-section">
                        <div className="intro-title header-m">Hello! I am Sabrina</div>
                        <div className="intro-description header-m">
                            <div><b className="header-l kinda-bold">A UX designer in Seattle, WA.</b></div>
                            <div className="small-line-space"></div>
                            <div><b className="header-l kinda-bold">I create user friendly designs</b></div>
                            <div><b className="header-l kinda-bold">& I love cats</b></div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="intro-contents" style={intorStyle}>
                    <div><b className="header-l kinda-bold">A UX designer based in Seattle, WA.</b></div>
                    <div className="small-line-space"></div>
                    <div><b className="header-l kinda-bold">I create user friendly designs & I love cats</b></div>
                    <div className="intro-title header-xxl">Hello! I am Sabrina</div>
                    <div style={{width: "50px", height: "100px", backgroundColor: "brown", borderRadius: "4px", margin: "0 auto"}}></div>
                </div> */}
                <div className="intro-contents christmaxTree">
                    <div><b className="header-xl kinda-bold tangerine"><i style={{color: "#F4E76A"}} className="fas fa-star"></i></b></div>
                    <div><b className="header-xl kinda-bold tangerine treeleaf">I love cats</b></div>
                    <div><b className="header-xl kinda-bold tangerine treeleaf">I'm panti-lingual</b></div>
                    <div><b className="header-xl kinda-bold tangerine treeleaf">Currently in Seattle</b></div>
                    <div><b className="header-xl kinda-bold tangerine treeleaf">I create user friendly designs</b></div>
                    <div className="header-xxl kinda-bold tangerine treeleaf">Hello! I am Sabrina</div>
                    <div className="treebase"></div>
                </div>
            </div>
            
            <div className="project-title-category header-l">My Works</div>
            <div className="project-list">
                {projects.map((project, i) => {
                    return (
                        <div className="project-item" key={"project-list-"+i}>
                            <Link to={project.url} className="nav-link flex-item-left" onClick={()=>scrollToTop()}><BorderContainer bg_image={project.background_image}/></Link>
                            {/* <BorderContainer projectURL={project.url} /> */}
                            <div className="right flex-item-right">
                                {generateProject(project.name, project.description, project.url)}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div
                style={{
                    textAlign: "center",
                    paddingBottom: "50px"
                }}
            ><Link to="/projects" className="more-projects-button" onClick={()=>scrollToTop()}>More Projects...</Link></div>
        </div>
    )
};

export default Home;