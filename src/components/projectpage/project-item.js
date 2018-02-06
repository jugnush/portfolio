import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class ProjectItem extends Component{
  
  render(){
    var path = this.props.path
    return(
      <div className="col-12 col-md-6 box">
        <Link to={{pathname:path}}>
          <img 
            src={this.props.img} 
            className="img-fluid" 
            alt="Responsive image"
          />
        </Link>
      </div>
    )
  }
}

export default ProjectItem;