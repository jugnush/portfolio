import React,{Component} from 'react';

/** import components **/
import NavBar from '../share/navbar';
import Auto27 from './projects/auto27';


export default class WorkPage extends Component{
  render() {
    return (
      <div>
        <NavBar />
        <section className="container page-width">
          <Auto27 />
        </section>
      </div>
    );
  }
}