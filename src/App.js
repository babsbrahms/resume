import React from 'react';
import {Route} from "react-router-dom"
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
          <Route path='/' exact component={HomePage} />
          <Route path='/about' exact component={AboutPage} />
          <Route path='/projects' exact component={ProjectPage} />
          <Route path='/contact' exact component={ContactPage} />
          <Route path='/image/:name' exact component={ImagePage} />
        </div>
        
      </div>
    );
  


export default App;
