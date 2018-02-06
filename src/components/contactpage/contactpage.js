import React, {Component} from 'react';
import 'particles.js/particles';

import NavBar from '../share/navbar';
import ContactPageConTent from './contact-page-content';
const particlesJS = window.particlesJS;


class ContactPage extends Component{

  componentDidMount(){
    particlesJS.load('particles-js', 'particle.json', function() {
      console.log('callback - particles-js config loaded');
    });
  }

  render(){
    return (
      <div id="particles-js">
        <NavBar />
        <ContactPageConTent />
      </div>
    )
  }
}

export default ContactPage;