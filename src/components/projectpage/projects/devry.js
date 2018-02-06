import React from 'react';

import RenderProject from '../share/render-project';
import markdown1 from '../images/markdown-1.png';
import markdown2 from '../images/markdown-2.png';


export default function Devry(){
  var title = 'Markdown Preview'; 
  var imgList = [markdown1,markdown2];
  var webLink = "empty";
  var codeLink = ["https://github.com/jugnush/markdown"];
  var techUse = ['ReactJS','HTML5','CSS3'];
  var about = 'This application implements ReactJS single page application.' +  
              'Taking user inputs and transform into box for each charactor in real time. also when click on box the charactor delete on both side'
  return(
    <RenderProject 
      title = {title}
      webLink={webLink}
      codeLink={codeLink}
      imgList={imgList}
      techUse={techUse}
      about={about}
    />
  )
}