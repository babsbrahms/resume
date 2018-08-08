import React, { Component } from 'react';
import {Segment, Message, Card, } from 'semantic-ui-react';

class ContactPage extends Component {
    state = {  }
    render() {
        return (
            <div className='ui piled raised green segment'>
                <Segment inverted color='grey'>
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
                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    Mobile
                                </Card.Header>
                                <Card.Description>
                                    +2348142319913
                                </Card.Description>
                            </Card.Content>
                        </Card>


                         <Card>
                            <Card.Content>
                                <Card.Header>
                                    E-mail
                                </Card.Header>
                                <Card.Description>
                                    yeancahbrahms7@gmail.com
                                </Card.Description>
                            </Card.Content>
                        </Card>
                </Segment>
            </div>
        );
    }
}

export default ContactPage;