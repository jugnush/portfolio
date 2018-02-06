import React from 'react';

import RenderProject from '../share/render-project';
import auto1 from '../images/auto1.png';
import auto2 from '../images/auto2.png';
import auto4 from '../images/auto4.png';
import auto6 from '../images/auto6.png';



export default function Rl(){
  let title = 'Ralph Lauren'; 
  let imgList = [auto1];
  let webLink = "www.ralphlauren.com/";
  let codeLink= ['empty'];
  let techUse = ['ReactJS','Redux', 'NodeJS','AWS','HTML5','Sass'];
  let about = `worked in Ralph Lauren Project from 1 year 2 months, Activities included: Frontend Architect, decided best practice approce for frontend. Build team in offshore, Wrote RL front Architecture and became a SME of majore module in RL
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