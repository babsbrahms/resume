import React, { Component } from 'react'
import { Image, Segment, Message, Card, Button } from 'semantic-ui-react'

// import Phvid from '../projects/phvid';
const projects = [
    { name: "Tietoon", type: "web app", github: "https://github.com/babsbrahms/tietoon-frontend", link: "https://tietoon.com", description: "Tietoon is a software for managing day-to-day business operation.", technology: "React, Firebase", poster: "https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/tietoon.png?alt=media&token=b002f520-38cd-46eb-b2ca-97bfe5d5a36b"},
    { name: "GoFree", type: "web app", github: "https://github.com/babsbrahms/gofree", link: "https://gofreeltd.web.app/", description: "GoFree is an for getting qoute and shipping packages and courier goods.", technology: "React, Firebase", poster: "https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/gofree.png?alt=media&token=01cbf331-d095-4200-8cd0-dcfa8b286242"},
    { name: 'PrepVENT', type: 'web app', github: 'https://github.com/babsbrahms/prepvent/tree/demo', link: 'http://prepvent.com', description: 'MERN stack app for managing events. Its features include: selling tickets, sending invitations, sending updated messages, event Checkout, making event promotions', technology: "React, Redux, NodeJS, Express, MongoDB", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/Screenshot_2020-05-22%20PrepVENT%20Profile%20Event%20ticketing%2C%20promotion%2C%20poster%2C%20sharing%2C%20management%20e%20t%20c%20all%20in%20one%20app%20.png?alt=media&token=14af8e53-0992-4bf7-b125-e5706e5b07d4' },
    { name: 'Next Restaurant', type: 'website', github: 'https://github.com/babsbrahms/next-restaurant', link: 'https://next-restaurant-ten.vercel.app/', description: 'Restaurant food order app. Users can order food from different restaurants and get them delivered.', technology: "NextJS, GraphQL", poster: 'https://firebasestorage.googleapis.com/v0/b/prepventapps.appspot.com/o/events%2F6096610ec711b8001767968a-1620711299628-next%20restaurant.png?alt=media&token=1d5ec6ec-dcb9-45b9-bdbb-2e7331156507' },
    { name: 'Web Arcade', type: 'web app', github: 'https://github.com/babsbrahms/web_arcade', link: 'https://web-arcade-82174.web.app/', description: 'Web games like tic-tac-toe, whac-a-mole, and rock-paper-scissors.', technology: "React, Typescript, React-testing-library", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/PrepVENT%20Check_In.png?alt=media&token=08c3ddaf-ddad-495f-ab54-b9505c61374c' },
    // { name: 'PrepVENT Blog', type: 'website', github: 'https://github.com/babsbrahms/prepvent-blog', link: 'https://prepvent-blog.herokuapp.com', description: 'PrepVENT blog is a platform like meduim that allow anybody to signup and create a blog post about events.', technology: "Node JS, Express", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/Screenshot_2020-05-22%20PrepVENT%20BLOG%20Home.png?alt=media&token=85cb1943-436c-439c-8b75-90a0377e2052' },
    // { name: 'PrepVENT Check-In', type: 'website', github: 'https://github.com/babsbrahms/prepvent-checkin', link: 'https://prepvent-checkin.herokuapp.com/', description: 'PrepVENT check-In is an app use to check-in event goer to an event. It displays the statistics of people that checked into an event. ', technology: "React", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/PrepVENT%20Check_In.png?alt=media&token=08c3ddaf-ddad-495f-ab54-b9505c61374c' },
    // { name: 'Stride Inc. Marketing', type: 'website', github: 'https://github.com/babsbrahms/stride', link: 'http://www.strideincmarketing.com', description: 'Stride Inc. Marketing is a business website the display the services rendered by a marketing firm. It allows visits to learn about the firm and schedule a consultation with the firm.', technology: "Node JS, Express", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/Screenshot_2020-05-22%20Stride%20Inc%20.png?alt=media&token=89c1d104-2ebd-46aa-8dd7-c7f54375ee1b' },
    // { name: 'Baz', type: 'website', github: '', link: 'http://www.baz.com.ng/', description: 'Baz is an e-commerce website for buying clothing. It has an home page that list product, product page, shopping cart and checkout. It also has an admin page that manage the product on the website.', technology: "Node JS, Express", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/evolona.png?alt=media&token=86ea9cb8-d6c8-4ab9-b21d-f06279be3889' },
    { name: 'Evolona', type: 'website', github: '', link: 'https://evolonacompanyltd.com/', description: 'Evolona is an e-commerce website for buying clothing and other fashion accessories. It has an home page that list product, product page, shopping cart and checkout. It also has an admin page that manage the product on the website.', technology: "Node JS, Express, EJS Template", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/evolona.png?alt=media&token=86ea9cb8-d6c8-4ab9-b21d-f06279be3889' },
    { name: 'PrepVENT Invite', type: 'mobile app', github: '', link: 'https://vb-prepvent.firebaseapp.com/', description: 'This is a mobile app for creating, editing event poster. It uses native features like AsycStorage and ImagePicker. It is available on android play store and ios app store.', technology: "React Native, Firebase", poster: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/prepvent_invite_mobile%2F13.png?alt=media&token=f1cada97-0178-4cce-864c-6aff514ecc52' },
    { name: "Event Manager", type: "mobile app", github: "", link: "https://drive.google.com/file/d/1-VN4Y7xM-mYe8m4XQVxzD4h4A37QVIbn/view?usp=sharing", description: "Mobile app for managing events. It uses native features like Camera, File System and Contact.", technology: "React Native", poster: "https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/screencapture-drive-google-drive-u-1-my-drive-2021-03-29-10_11_54%20(1).png?alt=media&token=93106425-f7f0-4c64-a47b-1e0c1dd91f7b"}
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
                    <a ref={x => this.myLink = x} style={{ display: 'hidden'}} key="web link" target={'__blank'} href={link}></a>
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
                                <a className="ui green basic fluid big button" href={`${page.link}`} target="__blank">
                                    Visit {page.type}
                                </a>
                                {(!!page.github) && (
                                <a className="ui blue basic fluid big button" href={`${page.github}`} target="__blank">
                                    Visit Github
                                </a>)}
                            </Card.Content>
                        </Card>    
                    )}
                </Card.Group>  

            </div>
        )
    }

}


export default ProjectPage



