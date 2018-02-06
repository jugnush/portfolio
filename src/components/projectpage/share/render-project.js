import React,{Component} from 'react';
import NavBar from '../../share/navbar';
import SlideShowImage from './slide-show-images';

class RenderProject extends Component{

  renderButton(webLink,codeLink){
    if(codeLink.length > 1 ){
      return (
        <div>
          <a href={webLink} className="btn btn-primary" role="button">View Page</a>
          <div>
            <a href={codeLink[0]} className="btn btn-primary" role="button">View Client Code</a>
            <a href={codeLink[1]} className="btn btn-primary" role="button">View Server Code</a>
          </div>
        </div>
      )
    } else if (codeLink[0]==='empty'){
      return(
        <div>
          <a href={webLink} className="btn btn-primary" role="button">View Page</a>
        </div>
      )
    }
    return (
      <div>
        <a href={webLink} className="btn btn-primary" role="button">View Page</a>
        <a href={codeLink} className="btn btn-primary" role="button">View Code</a>
      </div>
    )
  }

  render(){
    var title   = this.props.title;
    var webLink = this.props.webLink;
    var codeLink= this.props.codeLink;
    var imgList = this.props.imgList;
    var techUse = this.props.techUse;
    var about   = this.props.about; 
    return(
      <div>
        <NavBar />
          <div className="container page-width">
            <h2>{title}</h2><hr/>
            {this.renderButton(webLink,codeLink)}<hr/>
            <SlideShowImage images={imgList} />
            <div>
              <h3>About this project</h3><hr/>
              <p className="detail">{about}</p>
            </div>
            <div>
              <h3>Techs I used</h3><hr/>
              <ul>
                {techUse.map((each,i) => <li className="tag" key={i}>{each}</li>)}
              </ul>
            </div>
          </div>
      </div>
    )
  }
}

export default RenderProject;