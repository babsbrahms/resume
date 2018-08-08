import React from 'react';
import {Segment, Header, Divider, Card} from 'semantic-ui-react';

const Social = () => (
    <div>
        <Segment>
            <Header>
                <Header.Content>
                    <Header.Subheader>
                        Social
                        
                    </Header.Subheader>
                </Header.Content>
            </Header>
        </Segment>
        <Segment>
            summary
            <p>I am currently working on a new social-media project that utilizes react native ...</p>
            <Divider/>
            <div className='ui link cards'>
                <Card raised color='red'>      
                    
                    <Card.Content>
                        <Card.Description>
                            Mobile social media app.
                        </Card.Description>
                    </Card.Content>
                </Card>
            </div>
        </Segment>
        <Segment>
        <em>some technologies and packages used</em>
        <ul>
            <li> <b>React-native</b>: It allowed me to write react codes for platform specific operating system (ios and android). It also allows for code sharing within the app for the respective platforms. It is like react without the HTML syntax and some JavaScript syntax. </li>

            <li> <b>React-navigation</b>: For navigation between the screens within the app. </li>

            <li> <b>Firebase </b>: Use firebase for authenication, storage and database </li>
        </ul>
        </Segment>

    </div>
);

export default Social;