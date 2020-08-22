import React from 'react';
import About from './aboutme';
import Landing from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import {Route, Switch } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}/>        
        <Route path="/aboutme" component={About}/> 
        <Route path="/resume" component={Resume}/>        
        <Route path="/projects" component={Projects}/> 
        <Route path="/contact" component={Contact}/> 

    </Switch>
)
export default Main;