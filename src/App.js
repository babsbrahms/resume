import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import AboutPage from './components/pages/AboutPage';
import ProjectPage from './components/pages/ProjectPage';
import ContactPage from './components/pages/ContactPage';
// import TopHeader from './components/header/TopHeader';

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
        <div style={{width: '90%', margin: 'auto'}}>
          
          <br/>
          <div ref={this.about}></div>
          <AboutPage/>
          <br />
          <br />
          <br />
          <br />
          
          <div ref={this.projets}></div>
          <ProjectPage />
          <br />
          <br />
          <br />
          <br />
          
          <div ref={this.contact}></div>
          <ContactPage/>
          <br />
          <br />
          <br />
          <br />
          <div style={{ position: 'fixed', bottom: '10px', right: '20px'}}>
            <div style={{ padding: 7, backgroundColor: 'white', borderRadius: 3, boxShadow: `1px 3px 1px skyblue`, zIndex: 1000, borderWidth: 3, borderColor: "skyblue", borderStyle: "solid", borderBottomWidth: 0 }}>
            <Icon name='user' size='big' color="yellow" onClick={() => window.scrollTo(0,this.about.current.offsetTop)}/>
            <Icon name='folder' size='big' color="yellow" onClick={() => window.scrollTo(0,this.projets.current.offsetTop)}/>
            <Icon name='phone' size='big' color="yellow" onClick={() => window.scrollTo(0,this.contact.current.offsetTop)}/>
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
