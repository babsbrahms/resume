import React from 'react'
import { Tab, Segment, Message } from 'semantic-ui-react'

import Phvid from '../projects/phvid';
import Skincare from '../projects/Skincare';
import Event from '../projects/Event';
import Clocks from '../projects/Clocks';
import Social from '../projects/Social';

const panes = [
  { menuItem: 'phVID', render: () => <Tab.Pane> <Phvid/> </Tab.Pane> },
  { menuItem: 'skincare', render: () => <Tab.Pane><Skincare/></Tab.Pane> },
  { menuItem: 'e-VENT', render: () => <Tab.Pane><Event/></Tab.Pane> },
  { menuItem: 'clocks', render: () => <Tab.Pane> <Clocks/></Tab.Pane> },
  { menuItem: 'Social', render: () => <Tab.Pane><Social/></Tab.Pane> },
]

const ProjectPage = () => (
    <div className='ui piled raised green segment'>
        <Segment color='grey' inverted>
            <Message floating compact> 
                <Message.Content>
                    <Message.Header>
                        Projects
                    </Message.Header>
                    <p>Below are sumarries and few images of my previous projects</p>
                </Message.Content>
            
            </Message>
        </Segment>
        <Segment inverted color='grey'>
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
        </Segment>
    </div>

)

export default ProjectPage

