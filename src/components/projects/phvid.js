import React from 'react';
import {Segment, Header, Divider, Card, Image} from 'semantic-ui-react';

const pages=[
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(2).png?alt=media&token=dd725a1d-971d-4c20-befb-df1099e94661',
        name: 'Home Page'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(4).png?alt=media&token=41db0e5e-8b45-499d-ac92-bbe07a77e0e7',
        name: 'Profile Page'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(3).png?alt=media&token=2f11b14e-a240-4375-8af1-d3155ac902b4',
        name: 'Content Page'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(1).png?alt=media&token=54583356-03d2-408e-aedc-600707cb22c6',
        name: 'Add Content page'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(5).png?alt=media&token=a041f446-4b1f-4f83-8fbd-3e46f29139ac',
        name: 'Chatroom Page'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(7).png?alt=media&token=e46ebd2b-b639-43b2-80a1-2d7a39332b13',
        name: 'Chat'
    },
]

const Phvid = () => (
    <div>
        <Segment>
            <Header>
                <Header.Content>
                    <Header.Subheader>
                        Phvid
                    </Header.Subheader>
                </Header.Content>
            </Header>
        </Segment>
        <Segment>
            <em> summary</em>
            <p>
            phvid is the first app I ever built. It is a social-media app that permits users to add posts. Each post can contain an image and descriptions or either. Other users can like or dis-like the post; follow and un-follow the user. Finally, the app has a chat section for group chats.
            </p>
            <Divider/>
            <div className='ui link cards'>
                {pages.map((page, index)=>
                    <Card raised key={index.toString()} color='red'>  
                        <Image src={page.img} alt="not available" />
                        <Card.Content>
                            <Card.Description>
                                {page.name}
                            </Card.Description>
                        </Card.Content>
                    </Card>    
                )}
               
            </div>
        </Segment>
        <Segment>
            <em>some technologies and packages used</em>
            <ul>
                        <li> <b>nodejs</b>: I used nodejs which is a JavaScript runtime that runs on the sever. It has default packages or modules like <code>http</code> for handling http protocol, <code> fs</code> to manage file system tasks like read, delete files and so much more. </li>

                        <li> <b>express</b>:  Express is a framework I used together with nodejs to handle my routing and link my application together.</li>

                        <li> <b>MongoDB</b>: MongoDB is a non-SQL or relational database which stores data in collections.  I did the basic CRUD (create, read, update, delete) operations and used operators like <code> $push</code> to append data to an array. </li>

                        <li> <b>socket.io</b>: I used socket.io for the chat portion of this appication. I also implemented socket.io functions like broadcast (send message to everybody in the group chat but myself) and emit (send message to everybody in the group chat) messages.</li>

                        <li> <b>passport</b>: I used passport to authenicate users and bcrypt to hash the their passwords. I was able to check if a user is authenicated using <code>req.isAuthenticated()</code>, and <code>req.user</code> gives info about the currently authenicated user's data .</li>


                    </ul>

                    <Divider/>
                    <em>Other packages used</em>
                    <p>
                    "bcryptjs": "^2.4.3",
                    "body-parser": "^1.18.2",
                    "connect-flash": "^0.1.1",
                    "ejs": "^2.5.7",
                    "express": "^4.16.2",
                    "express-messages": "^1.0.1",
                    "express-session": "^1.15.6",
                    "express-validator": "^4.3.0",
                    "fs": "0.0.1-security",
                    "gridfs-stream": "^1.1.1",
                    "mongoose": "^4.13.6",
                    "multer": "^1.3.0",
                    "passport": "^0.4.0",
                    "passport-local": "^1.0.0",
                    "socket.io": "^2.0.4"
                    </p>

        </Segment>
    </div>
);

export default Phvid;