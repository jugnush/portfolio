import React from 'react';

import RenderProject from '../share/render-project';
import youtube1 from '../images/youtube-1.png';


export default function YoutubePlayer(){
  var title = 'saks 5thAvenue'; 
  var imgList = [youtube1];
  var webLink = "https://www.saksfifthavenue.com/Entry.jsp?site_refer=360i+G+TR&kw_refer=saksfifthavenue&gclid=Cj0KCQiAnuDTBRDUARIsAL41eDoJCjW7EOU3yiKdTi9PC1P_iUKfGXFxlIf6Umzp0aiAbjpRJ2C2BfUaAjHiEALw_wcB&gclsrc=aw.ds";
  var codeLink = ['empty'];
  var techUse = ['ReactJS','HTML5','CSS3', 'webpack', 'babel', 'ES6'];
  var about =`worked In saks 5thAvenue for 7 months, Activities included: brainstorming, 
  documented end-to-end user experience, including user workflows, 
  requirement gathering, review use cases, Leading 4 team members and also contributing as a lead frontend developer.`
  return(
    <RenderProject
      title={title} 
      webLink={webLink}
      codeLink={codeLink}
      imgList={imgList}
      techUse={techUse}
      about={about}
    />
  )
}