import React, { Component } from 'react'
import { Image, Segment, Message, Card, Button } from 'semantic-ui-react'

// import Phvid from '../projects/phvid';
const projects = [
    { name: "Tietoon", type: "web app", github: "", link: "tietoon.com", description: "Tietoon is a software for managing day-to-day business operation.", technology: "React, Firebase", poster: "https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/tietoon.png?alt=media&token=07a17990-1f47-496e-ba01-18ffe8c4b557"},
    { name: "GoFree", type: "web app", github: "https://github.com/babsbrahms/gofree", link: "https://gofreeltd.web.app/", description: "GoFree is an for getting qoute and shipping packages and courier goods.", technology: "React, Firebase", poster: "https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/gofree.png?alt=media&token=01cbf331-d095-4200-8cd0-dcfa8b286242"},
    { name: 'PrepVENT Blog', type: 'website', github: 'https://github.com/babsbrahms/prepvent-blog', link: 'https://prepvent-blog.herokuapp.com/login', description: 'PrepVENT blog allows users to post articles on the platform. It has the home page and archives page list all blog posts, category page to list all post post in thesame category, blog page display blog article and cms page to post, edit and delete blog post', technology: "Node JS, Express", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/Screenshot_2020-05-22%20PrepVENT%20BLOG%20Home.png?alt=media&token=85cb1943-436c-439c-8b75-90a0377e2052' },
    { name: 'PrepVENT Check-In', type: 'website', github: 'https://github.com/babsbrahms/prepvent-checkin', link: 'https://prepvent-checkin.herokuapp.com/', description: 'PrepVENT check-In is an app use to check-in event goer to an event. It displays the statistics of people that checked into an event. ', technology: "React", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/PrepVENT%20Check_In.png?alt=media&token=08c3ddaf-ddad-495f-ab54-b9505c61374c' },
    { name: 'Stride Inc. Marketing', type: 'website', github: 'https://github.com/babsbrahms/stride', link: 'https://stride-test.herokuapp.com', description: 'Stride Inc. Marketing is a business website the display the services rendered by a marketing firm. It allows visits to learn about the firm and schedule a consultation with the firm.', technology: "Node JS, Express", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/Screenshot_2020-05-22%20Stride%20Inc%20.png?alt=media&token=89c1d104-2ebd-46aa-8dd7-c7f54375ee1b' },
    { name: 'Evolona', type: 'website', github: '', link: 'https://evolonacompanyltd.com/', description: 'Evolona is an e-commerce website for buying clothing and other fashion accessories. It has an home page that list product, product page, shopping cart and checkout. It also has an admin page that manage the product on the website.', technology: "Node JS, Express", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/evolona.png?alt=media&token=86ea9cb8-d6c8-4ab9-b21d-f06279be3889' },
    { name: 'PrepVENT Invite', type: 'mobile app', github: '', link: 'https://vb-prepvent.firebaseapp.com/', description: 'This is a mobile app for creating, editing and sharing invitation letter and event poster. It is available on android play store and ios app store.', technology: "React Native, Firebase", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/prepvent_invite_mobile%2F13.png?alt=media&token=f1cada97-0178-4cce-864c-6aff514ecc52' },
]


class ProjectPage extends Component { 
    constructor (props) {
        super(props);

        this.state = {
            visible: false,
            current: 'PrepVENT Invite',
            link: ''
        }

        this.myLink = React.createRef()
    }

    setVisible = (val) => this.setState({ visible: val })

    visitPage = link => this.setState({ link }, () => {
        this.myLink.click()
    })  


    render() {
        const { visible, current, link } = this.state;
        return (
            <div className='ui raised segment'>
                <Segment color='red'>
                    <Message floating compact> 
                        <Message.Content>
                            <Message.Header>
                                Projects
                            </Message.Header>
                            <p>Below are summaries and links of my previous projects.</p>
                        </Message.Content>
                    </Message>
                    <a ref={x => this.myLink = x} style={{ display: 'hidden'}} target={'__blank'} href={link}></a>
                </Segment>

                <Card.Group stackable itemsPerRow={2} centered>
                    {projects.map((page, index)=>
                        <Card fluid raised key={index.toString()} color='red'>  
                            <Image src={page.poster} alt="not available" />
                            <Card.Content>    
                                <Card.Header textAlign={'center'}>{page.name}</Card.Header>
                                <Card.Meta textAlign={'center'}>{page.type}</Card.Meta>
                                <Card.Description>
                                    {page.description}
                                </Card.Description>
                                <Card.Meta >{page.technology}</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <Button disabled={!page.link} onClick={() => this.visitPage(page.link)} size="big" fluid basic color='green'>
                                    Visit {page.type}
                                </Button>
                                {(!!page.github) && (
                                <Button disabled={!page.github} onClick={() => this.visitPage(page.github)} size="big" fluid basic color='blue'>
                                    Visit Github
                                </Button>)}
                            </Card.Content>
                        </Card>    
                    )}
                </Card.Group>  

            </div>
        )
    }

}


export default ProjectPage



