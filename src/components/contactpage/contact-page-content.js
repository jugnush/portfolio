import React from 'react';
import resume from './Resume-WebDev.pdf';

export default function ContactPageContent(){
  return(
    <div className="contact-contents">
      <div>
        <h3>Contact</h3>
      </div>
      
      <div className="contact-item">
        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
        <h5> 
          <a href="mailto:jugnush@gmail.com">
            jugnush@gmail.com
          </a>
        </h5>
      </div>
      <div className="resume">
        <ul>
          <li>
            <a href={resume}>Resume</a>
          </li>
        </ul>
      </div>
      <div className="social-icon-container">
        <ul>
          <li><a href="http://facebook.com/jugnu4"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="https://github.com/jugnush"><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href="https://www.linkedin.com/in/jugnu-s-9b69762/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  )
}