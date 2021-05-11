import React, { Component } from 'react';
import {Segment, Message, List, Progress, Header, Card, Grid, Divider } from 'semantic-ui-react';
import profile from '../images/profile.jpg';
//
const items = [
    {
      childKey: 0,
      image: profile,
      header: 'Biography',
      description: ' I had an idea to build an app. Therefore, I decided to give it a try, because I knew the basics of HTML from secondary school. During the first trial, I discovered I was not as good as I had thought. This motivated me to challenge myself to learn the basics HTML and CSS. Eventually,I built my app to a certain stage, I really loved it, but it was not as good as I had intended it to be. At that point, i knew I had to upgrade my skills. Luckly for me, I was just done with my university education and I had not secured a job yet. I had enough time on my hands and this made it easy for me to engross my self with the learning and assimilation of my new found love. I started teaching myself how to code with materials from youtube (traversy media, thenewboston e.t.c.), blog posts and web sites (medium, w3schools, Udemy, developer.mozilla.org, stack overflow e.t.c.), pdfs and materials i could get my hands on. Honestly, at the beginning it was not easy because I could not debug my code nor do I know how to code correctly. With perseverance and dedication, I improved over time. I learnt how to debug, write the same code with multiple syntaxes, read official documentations and some much more. I am proud of how far I have come, I challenged myself to teach myself something I love. I know that I am still a work in progress and I am excited to learn more.',
      meta: 'How I started programming',
      extra: 'Still on the path to greatness... Ibrahim Olayinka Babatunde',
    },
  ]
class AboutPage extends Component {
    state = { 
        profileImage: '../images/profile.jpg'
     }
    render() {
        const h1 = 500
        const h2 = 250
        const color = '#ffff99';

        return (
            <div id='about' className='ui raised segment'>
                <Segment color='red'>
                    <Message compact>
                        <Message.Content>
                            <Message.Header>About Me </Message.Header>
                        </Message.Content>
                        <p>Learn about me and the skills I have aquired</p>
                    </Message>
                </Segment>
                <Segment>
                    <div style={{ width: '100%', height: 'auto' }}>
                        <div id="about-bg" style={{ width: '100%', height: '100%', borderWidth: 1, borderColor: color,borderStyle: 'solid', backgroundColor: color, borderBottomRightRadius: h1 }}>
                            <Header as='h2' color='black'>
                                <Header.Content>Ibrahim Olayinka Babatunde</Header.Content>
                            </Header>
                            {/* <img src={profile} style={{ width: h2, height: h2, borderStyle: 'solid', borderWidth: 1, borderColor: color, backgroundColor: color, borderRadius: (h1/2)}}/> */}
                            <div style={{ width: '95%', height: 'auto'}}>
                                {/* <Item.Group items={items} /> */}
                                <Card.Group>
                                    <Card>
                                        <Card.Content>
                                            <Card.Header>Experience</Card.Header>
                                            <Card.Description>
                                                4+ years
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>

                                    <Card>
                                        <Card.Content>
                                            <Card.Header>Language</Card.Header>
                                            <Card.Description>
                                                JavaScript
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>

                                    <Card>
                                        <Card.Content>
                                            <Card.Header>Platform</Card.Header>
                                            <Card.Description>
                                                Web and Mobile
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>

                                    <Card>
                                        <Card.Content>
                                            <Card.Header>Specialization</Card.Header>
                                            <Card.Description>
                                                Full Stack (Front End Focus)
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>

                                    <Card>
                                        <Card.Content>
                                            <Card.Header>Database</Card.Header>
                                            <Card.Description>
                                                MongoDB, Firebase
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>

                                    <Card>
                                        <Card.Content>
                                            <Card.Header>Cloud</Card.Header>
                                            <Card.Description>
                                                Firebase, Heroku, Vercel and Netlify
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Card.Group>

                            </div>
                        </div>
                    </div>
                     

                </Segment>
                <Segment>
                    <List link>
                        <List.Header as='h3'>Skills</List.Header>
                        <List.Item>BASICS: HTML, CSS, JavaScript
                        <Progress size='small' color='yellow' progress percent={95} style={{ backgroundColor: "#d1edfc" }} />
                        </List.Item>
                        <List.Item>React
                        <Progress size='small' color='yellow' progress  percent={95} style={{ backgroundColor: "#d1edfc" }} />
                        </List.Item>
                        <List.Item>Next Js
                        <Progress size='small' color='yellow' progress  percent={95} style={{ backgroundColor: "#d1edfc" }} />
                        </List.Item>
                        <List.Item>React-Native 
                        <Progress size='small' color='yellow' progress  percent={95} style={{ backgroundColor: "#d1edfc" }} />
                        </List.Item>
                        <List.Item>Redux
                        <Progress size='small' color='yellow' progress  percent={95} style={{ backgroundColor: "#d1edfc" }}  />
                        </List.Item>
                        {/* <List.Item>Object Oriented Programming
                        <Progress size='small' color='yellow' progress  percent={90} style={{ backgroundColor: "#d1edfc" }} />
                        </List.Item> */}
                        <List.Item>Typescript
                        <Progress size='small' color='yellow' progress  percent={90} style={{ backgroundColor: "#d1edfc" }}  />
                        </List.Item>
                        <List.Item>Test-driven Development (React Testing Library and Jest)
                        <Progress size='small' color='yellow' progress  percent={90} style={{ backgroundColor: "#d1edfc" }}  />
                        </List.Item>
                        <List.Item>GraphQL
                        <Progress size='small' color='yellow' progress  percent={90} style={{ backgroundColor: "#d1edfc" }}  />
                        </List.Item>
                        <List.Item>Firebase
                        <Progress size='small' color='yellow' progress  percent={90} style={{ backgroundColor: "#d1edfc" }} />
                        </List.Item>
                        <List.Item>Git and Github
                        <Progress size='small' color='yellow' progress  percent={90} style={{ backgroundColor: "#d1edfc" }}  />
                        </List.Item>
                        <List.Item>MongoDB 
                        <Progress size='small' color='yellow' progress  percent={85} style={{ backgroundColor: "#d1edfc" }} />
                        </List.Item>
                        <List.Item>Node JS
                        <Progress size='small' color='yellow' progress  percent={85} style={{ backgroundColor: "#d1edfc" }} />
                        </List.Item>
                        {/* <List.Item>CSS LIBRARY: Semantic UI, Bootstrap
                        <Progress size='small' color='yellow' progress  percent={87} style={{ backgroundColor: "#d1edfc" }} />
                        </List.Item> */}
                        <List.Item>Linux Commands
                        <Progress size='small' color='yellow' progress  percent={60} style={{ backgroundColor: "#d1edfc" }} />
                        </List.Item>
                        

                    </List>
                </Segment>
                <Segment>
                    <Grid columns='2' stackable>
                        <Grid.Column>
                            <Card fluid>
                                <Card.Header as='h3'>Education</Card.Header>
                                <Card.Content>
                                
                                    {/* Thomas Adewumi college, Oko, Kwara State.
                                    <Card.Description>
                                     Secondary School
                                    </Card.Description>
                                    <Card.Meta>
                                        2007 - 2011
                                    </Card.Meta>

                                    <Divider /> */}
                                    American University of Sharjah
                                    <Card.Description>
                                    B.S.C Chemical Engineering
                                    </Card.Description>
                                    <Card.Description>
                                    G.P.A: 2.51/4
                                    </Card.Description>
                                    <Card.Meta>
                                        2012-2017
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column>
                            <Card fluid>
                                <Card.Header as='h3'>Experience</Card.Header>
                                <Card.Content>
                                    Membersdrive (now Mev)
                                    <Card.Description>
                                    I was was a front-end Engineer at Membersdrive.
                                    </Card.Description>
                                    <Card.Description>
                                    Tools: React, Adobe-Illustrator.
                                    </Card.Description>
                                    <Card.Meta>
                                        2017-2019
                                    </Card.Meta>
                                    <Divider />
                                    PrepVENT
                                    <Card.Description>
                                    I work as full-stack engineer at PrepVENT. 
                                    </Card.Description>
                                    <Card.Description>
                                    Tools: React, React-Native, Firebase, Node JS.
                                    </Card.Description>
                                    <Card.Meta>
                                        2019-2019
                                    </Card.Meta>
                                    <Divider />
                                    Nation Youth Service Corp (NYSC)
                                    <Card.Description>
                                        I work at the National Automotive Design And Development Council
                                    </Card.Description>
                                    <Card.Meta>
                                        2019-2020
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid>


                    <Card.Group>
   
                    </Card.Group>
                </Segment>
            </div>
        );
    }
}

export default AboutPage;