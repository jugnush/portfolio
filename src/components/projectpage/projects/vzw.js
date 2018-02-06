import React from 'react';

import RenderProject from '../share/render-project';
import todo1 from '../images/todo-1.png';
import todo2 from '../images/todo-2.png';
import todo3 from '../images/todo-3.png';


export default function YoutubePlayer(){
  var title='GoWireless Agent Commerce';
  var imgList = [todo1,todo2,todo3];
  var webLink = "https://www.gowireless.com/store/home/?gclid=Cj0KCQiAnuDTBRDUARIsAL41eDqdcywCOlKguTrr-oUz0EBEeY_n5oKaZt5ejKspeKxPDSjWzNGQxx4aAjMbEALw_wcB";
  var codeLink = ['empty'];
  var techUse = ['ReactJS','Redux','restful api','NodeJS','backbone','HTML5','CSS3'];
  var about = `GoWireless is a Verizon Authorized Retailer e-commerce. goal is to deliver world-class service while connecting you with custom smartphone solutions matched perfectly to enhance your wireless lifestyle.

  Responsibility includes, frontend delivery, production support, UAT support, understanding client’s requirement, create frontend delivery plan, and get them delivery on time, which also includes build highly skilled frontend team to progress in project, mentored 4 team members for reactjs and backbone. Work on 
  `
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