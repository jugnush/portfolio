import React,{Component} from 'react';
import 'particles.js/particles';
/** import components **/
import HomeContents from './homepage-contents';
import HomeButtons from './home-buttons';

const particlesJS = window.particlesJS;

class HomePage extends Component{

  componentDidMount(){
    particlesJS.load('particles-js', 'particle.json', function() {
      console.log('callback - particles-js config loaded');
    });
  }

  render(){
    
    return(
      <div id="particles-js">
        <HomeContents />
      </div>
    )
  }
}

export default  HomePage;