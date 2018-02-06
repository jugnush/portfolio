import React, {Component} from 'react';
import NavBar from '../share/navbar';
import ProjectItem from './project-item';

/** images **/
import vzw from './images/vzw-logo-156-130-c.jpg';
import devry from './images/DeVry-University-Logo.png';
import saks from './images/Saks_Fifth_Avenue_Logo.jpg';
import rl from './images/polo-ralph-lauren-logo-clipart-2.jpg';

class ProjectPage extends Component{
  render(){

    return(
      <div>
        <NavBar />
        <section className="container page-width">
          <div className="row">
            <ProjectItem img={rl} path="/projects/rl" />
            <ProjectItem img={saks} path="/projects/saks" />
            <ProjectItem img={vzw} path="/projects/vzw" />
            <ProjectItem img={devry} path="/projects/devry"/>
          </div>
        </section>
      </div>
    )
  }  
}

export default ProjectPage;