import React, { Component } from 'react';
import {Segment, Message, List, Item, Icon, Progress } from 'semantic-ui-react';
import profile from '../images/profile.jpg';

const items = [
    {
      childKey: 0,
      image: profile,
      header: 'Biography',
      description: 'had an idea to build an app. Therefore, I decided to give it a try, because I knew the basics of HTML from secondary school. During the first trial, I discovered I was not as good as I had thought. This motivated me to challenge myself to learn the basics HTML and CSS. Eventually,I built my app to a certain stage, I really loved it, but it was not as good as i had intended it to be.At that point, i knew I had to upgrade my skills. Luckly for me, I was just done with my university education and I had not secured a job yet. I had enough time on my hands and this made it easy for me to engross my self with the learning and assimilation of my new found love. I started teaching myself how to code with materials from youtube (traversy media, thenewboston e.t.c.), blog posts and web sites (medium, developer.mozilla.org, stack overflow e.t.c.), pdfs and materials i could get my hands on. Honestly, at the beginning it was not easy because I could not debug my code nor do i know how to how to write the right code. With perseverance and dedication, I improved over time. I learnt how to debug, write the same code with multiple syntaxes, read official documentations and some much more. I am proud of how far I have come, I challenged myself to teach myself something I love. I know that I am still a work in progress and I am excited to learn more.',
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
                        <div style={{ width: '100%', height: '100%', borderWidth: 1, borderColor: color,borderStyle: 'solid', backgroundColor: color, borderBottomRightRadius: h1 }}>
                           
                            {/* <img src={profile} style={{ width: h2, height: h2, borderStyle: 'solid', borderWidth: 1, borderColor: color, backgroundColor: color, borderRadius: (h1/2)}}/> */}
                            <div style={{ width: '95%', height: 'auto'}}>
                                <Item.Group items={items} />
                            </div>
                        </div>
                    </div>
                     

                </Segment>
                <Segment>
                    <List link>
                        <List.Header as='h3'>Skills</List.Header>
                        <List.Item>HTML
                        <Progress size='small' color='yellow' progress percent={90} />
                        </List.Item>
                        <List.Item>CSS
                        <Progress size='small' color='yellow' progress  percent={80} />
                        </List.Item>
                        <List.Item>JavaScript
                        <Progress size='small' color='yellow' progress  percent={85} />
                        </List.Item>
                        <List.Item>React
                        <Progress size='small' color='yellow' progress  percent={90} />
                        </List.Item>
                        <List.Item>React-Native 
                        <Progress size='small' color='yellow' progress  percent={90} />
                        </List.Item>
                        <List.Item>Object Oriented Programming
                        <Progress size='small' color='yellow' progress  percent={82} />
                        </List.Item>
                        <List.Item>MongoDB 
                        <Progress size='small' color='yellow' progress  percent={77} />
                        </List.Item>
                        <List.Item>Firebase
                        <Progress size='small' color='yellow' progress  percent={75} />
                        </List.Item>
                        <List.Item>Bootstrap
                        <Progress size='small' color='yellow' progress  percent={65} />
                        </List.Item>
                        <List.Item>Semantic UI
                        <Progress size='small' color='yellow' progress  percent={80} />
                        </List.Item>
                        <List.Item>Linus Commands
                        <Progress size='small' color='yellow' progress  percent={60} />
                        </List.Item>
                        <List.Item>SQL
                        <Progress size='small' color='yellow' progress  percent={70} />
                        </List.Item>
                        <List.Item>Wordpress
                        <Progress size='small' color='yellow' progress  percent={70} />
                        </List.Item>
                        

                    </List>
                </Segment>
            </div>
        );
    }
}

export default AboutPage;