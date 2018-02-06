import React from 'react';

import RenderProject from '../share/render-project';
import auto1 from '../images/auto1.png';




export default function Rl(){
  let title = 'Ralph Lauren'; 
  let imgList = [auto1];
  let webLink =  "https://www.ralphlauren.com/";
  let codeLink= ['empty'];
  let techUse = ['ReactJS','Redux', 'NodeJS','HTML5','Sass'];
  let about = `Worked with Ralph Lauren, for 1 year and 2 months, Activities included: Frontend Architect, decided best practice approach for frontend. Build a team, in offshore, Wrote RL front Architecture and became a SME of major and complex modules in RL.
  Delivered the most critical part of RL e-commerce portal, Create Your Own(CYO), PDP Advanced and Category Landing Page.

  ●	Used JavaScript framework REACTjs for CYO.
●	Used Hybris-First approach with frontend 
●	Directly Interacted with client to understand and analysis the requirement.
●	Coordinating 12 team member in offshore and directly reporting to Client. 

  `
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