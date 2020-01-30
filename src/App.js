import React, { Component } from 'react';
import {Route, Link} from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProjectPage from './components/pages/ProjectPage';
import ContactPage from './components/pages/ContactPage';
import TopHeader from './components/header/TopHeader';
// import ImagePage from './components/pages/ImagePage';

export default class App extends Component {
  constructor(props) {
    super(props)
     this.about = React.createRef();
     this.projets = React.createRef();
     this.contact = React.createRef();
  }
  render() {
    return (
      <div style={{padding: 0, margin: 0}}>
        {/* <TopHeader about={this.about} /> */}
        <div style={{width: '90%', margin: 'auto'}}>
          
          <br/>
          <div ref={this.about}></div>
          <AboutPage/>

          <div ref={this.projets}></div>
          <ProjectPage />
          
          <div ref={this.contact}></div>
          <ContactPage/>
          <div style={{ position: 'fixed', bottom: '10px', right: '20px'}}>
            <div style={{ padding: 7, backgroundColor: 'white', borderRadius: 3, boxShadow: `1px 3px 1px #ffff99`, }}>
            <Icon name='user' size='big' color='red' onClick={() => window.scrollTo(0,this.about.current.offsetTop)}/>
            <Icon name='folder' size='big' color='red' onClick={() => window.scrollTo(0,this.projets.current.offsetTop)}/>
            <Icon name='phone' size='big' color='red' onClick={() => window.scrollTo(0,this.contact.current.offsetTop)}/>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        
      </div>
    )
  }
}
