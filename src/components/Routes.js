import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Projects from '../pages/projects';
import Resume from '../pages/resume';
import Contact from '../pages/contact';
import Project_Mirror from '../pages/projects/mirror';
import TheProductDesignerNewDesign from '../pages/projects/TheProductDesignerNewDesign';
import OSWEGOStudyBudy from '../pages/projects/OswegoStudyBuddy';
import ChaseNewDesign from '../pages/projects/chaseNewDesign';
import GoHeartTeaBarNewDesign from '../pages/projects/goHeartTeaBarNewDesign';
const Routes = () => {
    return (
        <div className="main-container">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/projects/mirror" component={Project_Mirror}/>
                <Route exact path="/projects/go-heart-tea-bar" component={GoHeartTeaBarNewDesign}/>
                <Route exact path="/projects/chase" component={ChaseNewDesign}/>
                <Route exact path="/projects/the-product-designer" component={TheProductDesignerNewDesign}/>
                <Route exact path="/projects/OSWEGO-Study-Buddy" component={OSWEGOStudyBudy}/>
                <Route exact path="/resume" component={Resume}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </div>
    )
}

export default Routes;