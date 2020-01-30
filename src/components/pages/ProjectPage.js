import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Message } from 'semantic-ui-react'

// import Phvid from '../projects/phvid';
import Skincare from '../projects/Skincare';
import Event from '../projects/Event';
import Clocks from '../projects/Clocks';
import Social from '../projects/Social';
import EventMobile from '../projects/EventMobile';
import Prepvent from '../projects/PrepVENTMobile'


class ProjectPage extends Component { 
    state = {
        visible: false,
        current: 'PrepVENT Invite'
    }
    setVisible = (val) => this.setState({ visible: val })

    render() {
        const { visible, current } = this.state;
        return (
            <div className='ui raised segment'>
                <Segment color='red'>
                    <Message floating compact> 
                        <Message.Content>
                            <Message.Header>
                                Projects
                            </Message.Header>
                            <p>Below are sumaries and few images of my previous projects</p>
                        </Message.Content>
                    
                    </Message>
                    
                </Segment>
                <h3>Toggle Projects <Icon name='list alternate outline' size='big' color='red' onClick={() => this.setState({ visible: true })}/></h3>
                
        
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        onHide={() => this.setVisible(false)}
                        vertical
                        visible={visible}
                        width='thin'
                    >
                        <Menu.Item as='h2' onClick={() => this.setState({ current: 'PrepVENT Invite', visible: false })}><Icon color='red' name='mobile' />PrepVENT Invite</Menu.Item> 
                        <Menu.Item as='h2' onClick={() => this.setState({ current: 'skincare', visible: false })}><Icon color='red' name='desktop' />Skincare</Menu.Item>
                        <Menu.Item as='h2' onClick={() => this.setState({ current: 'event', visible: false })}><Icon color='red' name='desktop'/>event</Menu.Item>
                        <Menu.Item as='h2' onClick={() => this.setState({ current: 'e_VENT', visible: false })}><Icon color='red' name='mobile' />e_VENT</Menu.Item>
                    </Sidebar>
        
                    <Sidebar.Pusher dimmed={visible}>
                        <Segment basic>
                            { (current === 'PrepVENT Invite') &&  (<div><Prepvent/></div>) }
                            { (current === 'skincare') &&  (<div><Skincare/></div>) }
                            { (current === 'event') && ( <div><Event/></div>) }
                            { (current === 'clocks') &&  (<div> <Clocks/></div>) }
                            { (current === 'e_VENT') &&  (<div><EventMobile/></div>) }
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                <h3>Toggle Projects <Icon name='list alternate outline' size='big' color='red' onClick={() => this.setState({ visible: true })}/></h3>
            </div>
        )
    }

}


export default ProjectPage



