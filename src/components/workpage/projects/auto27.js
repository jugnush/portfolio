import React,{Component} from 'react';

/** import components **/
import RenderWork from '../share/render-work';
import WebButton from '../share/web-button';
/** import images **/
import auto27 from '../images/auto27.png';


export default class Auto27 extends Component{
  render(){
    const description="Auto 27 is a start up car dealership in Sacramento " +
                      "region. They are the best at helping people get their " +
                      "dream car.";
    const webLink = "https://auto27.us";
    return(
      <div>
         <RenderWork 
            image={auto27}
            name="Auto 27"
            techs="Mongo, Node, Express, React, AWS, Sass"
            description={description}
            webLink={webLink}
          />
      </div>
    )
  }
}
