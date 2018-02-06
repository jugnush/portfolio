import React,{Component} from 'react';

export default class WebButton extends Component{
  render(){
    return (
      <div className="web-btn">
        <a href={this.props.webLink}>
          <span>Visit Website</span>
        </a>      
      </div>
    )
  }
}