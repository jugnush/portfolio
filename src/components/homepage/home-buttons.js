import React from 'react';
import {Link} from 'react-router-dom';

export default function HomeButtons(){
  return (
    <div className="home-btn">
      <Link to="/projects">
        <span>View my projects</span>
      </Link>      
    </div>

  )
}


