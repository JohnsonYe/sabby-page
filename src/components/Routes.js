import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Projects from '../pages/projects';
import Resume from '../pages/resume';
import Contact from '../pages/contact';
import Project_Mirror from '../pages/projects/mirror';
import Project_Go_Heart_Tea_Bar from '../pages/projects/goHeartTeaBar';
import Project_The_Product_Designer from '../pages/projects/theProductDesigner';
import Project_Chase from '../pages/projects/chase';

const Routes = () => {
    return (
        <div className="main-container">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/projects/mirror" component={Project_Mirror}/>
                <Route exact path="/projects/go-heart-tea-bar" component={Project_Go_Heart_Tea_Bar}/>
                <Route exact path="/projects/chase" component={Project_Chase}/>
                <Route exact path="/projects/the-product-designer" component={Project_The_Product_Designer}/>
                <Route exact path="/resume" component={Resume}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </div>
    )
}

export default Routes;