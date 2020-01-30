import React from 'react';
import {Route, Link} from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProjectPage from './components/pages/ProjectPage';
import ContactPage from './components/pages/ContactPage';
import TopHeader from './components/header/TopHeader';
import ImagePage from './components/pages/ImagePage';

const App = () => 
 
    (
      <div style={{padding: 0, margin: 0}}>
        <TopHeader />
        <div style={{width: '90%', margin: 'auto'}}>
          
          <br/>
          <AboutPage ref={this.about}/>
          <ProjectPage ref={this.project} />
          <ContactPage ref={this.contact}/>
          <div style={{ position: 'fixed', bottom: '10px', right: '20px'}}>
            <div style={{ padding: 7, backgroundColor: 'white', borderRadius: 3, boxShadow: `1px 3px 1px #ffff99`, }}>
              <Icon name='angle double up' size='big' color='red' onClick={() => window.scrollTo(0,0)}/>
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
    );
  


export default App;
