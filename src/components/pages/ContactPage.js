import React, { Component } from 'react';
import {Segment, Message, Card, Icon, Divider } from 'semantic-ui-react';

class ContactPage extends Component {
    state = {  }
    render() {
        return (
            <div className='ui raised segment'>
                <Segment color='red'>
                    <Message size='small' compact >
                        
                        <Message.Content>
                            <Message.Header as='h3'>
                                Contact Me
                            </Message.Header>
                            <p>You can contact me using the below information</p>
                    </Message.Content>
                </Message>
               </Segment>
                <Segment stacked>
                    <Card.Group itemsPerRow='2' stackable>
                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    <Icon name='phone'/>
                                    Mobile
                                </Card.Header>
                                <Divider />
                                <Card.Description>
                                    <a target='_blank' rel="noopener noreferrer" href='tel:+2348142319913'>+2348142319913</a>
                                </Card.Description>
                            </Card.Content>
                        </Card>


                         <Card>
                            <Card.Content>
                                <Card.Header>
                                    <Icon name='mail'/>
                                    E-mail
                                </Card.Header>
                                <Divider />
                                <Card.Description>
                                    <a target='_blank' rel="noopener noreferrer" href='mailto:yeancahbrahms7@gmail.com'>yeancahbrahms7@gmail.com</a>
                                    
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Segment>
            </div>
        );
    }
}

export default ContactPage;