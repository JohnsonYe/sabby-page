import React from 'react';
import { ProjectList } from '../constants/projectUrls';
import Thumbnail from '../components/Thumbnail';
import '../style/project.css'

const Projects = function() {
    return (
        <div className="projects-container">
            {ProjectList.map((project, index) => {
                return (<Thumbnail
                    title={project.name}
                    redirectUrl={project.url}
                    image={project.image}
                    index={index}>
                </Thumbnail>)
            })}
        </div>
    )
};

export default Projects;