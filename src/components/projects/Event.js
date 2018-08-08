import React from 'react';
import {Segment, Header, Divider, Card, Image} from 'semantic-ui-react';

const pages=[
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(22).png?alt=media&token=dfa49c6c-fab0-42b0-a058-4ba4ed4693dc',
        name: 'Home Page'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(23).png?alt=media&token=95122e97-df6b-423f-bc30-ba5b986d07c1',
        name: 'Dashbord'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(24).png?alt=media&token=88d9c271-0aff-426d-b1d2-8bd2949b1eea',
        name: 'Add Event Page'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(25).png?alt=media&token=e6fdb1f4-bc73-4a5d-ad70-ff03ecf21809',
        name: 'Event Page'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(26).png?alt=media&token=04c1e2ec-f00c-4504-9881-11fd49744978',
        name: 'Notification Page'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(27).png?alt=media&token=69f5b9e1-59f9-4c9a-aac3-7cea6c912d70',
        name: 'Profile page'
    },
]
const Event = () => (
    <div>
        <Segment>
            <Header>
                <Header.Content>
                    <Header.Subheader>
                        E-vent
                    </Header.Subheader>
                </Header.Content>
            </Header>
        </Segment>
        <Segment>
            <em> summary</em>
           
            <p>
            This is a react app which allow users to plan their events and share it with other users. I utilizes google api to share events location.
            </p>
            <Divider/>
            <div className='ui link cards'>
                {pages.map((page, index)=>
                    <Card raised key={index.toString()} color='red'>  
                        <Image src={page.img} alt="not available"/>
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
                <li> <b>nodejs, express, MongoDB, multer</b></li>

                <li> <b>React</b>: I used react framework to manage my app and I made use of the life-cycle methods provided by react to handle events and transfer data within the app. </li>

                <li> <b>redux </b>: Redux helps to manage state in the application because react's state and props becomes hard to manage in large apps. </li>

                <li> <b>axios</b>: Axios was used to make requests to my backend API. I generated an authorization-header token using axios for every request to send some query parameter for the MongoDB operations.</li>

                <li> <b>google-maps-react</b>:  This package uses the google map api to display maps and markers on react apps. A google API key is needed to use this package.</li>

                <li> <b>semantic ui</b>: A powerfully CCS framework that has it own react library.</li>

                <li> <b>dotenv</b>: It saves varibles that I use more often as environmental variables and  makes then more accessable</li>

                <li> <b>bluebird</b>: I used it to override the default MongoDB promises, in order to  make API requests. </li>

                <li> <b>multer-gridfs-storage</b>: Together with multer, I was able to save images to the MongoDB database directly and read them from the database.</li>

                <li> <b>html5 navigator.geolocation </b>: I used it to get my current location. Together with google-maps-react I was able to pin-pointed my location on the map. Also, I was able to watch and adjust the marker to my new location during motion.</li>

                <li> <b>html5 navigator.getUserMedia </b>: I used it to access my pc's camera in order to take a picture and generate an image using the html5 canvas  </li>
                
            </ul>

            <Divider/>
            <em>Other packages used</em>
            <br/>
            <b>Front-end</b>
            <p>
            "axios": "^0.18.0",
            "google-maps-react": "^2.0.2",
            "jsonwebtoken": "^8.2.1",
            "jwt-decode": "^2.2.0",
            "moment": "^2.22.1",
            "prop-types": "^15.6.1",
            "react": "^15.6.1",
            "react-datetime": "^2.14.0",
            "react-dom": "^15.6.1",
            "react-html-parser": "^2.0.2",
            "react-react": "^1.1.3",
            "react-redux": "^5.0.7",
            "react-router-dom": "^4.2.2",
            "react-scripts": "1.1.4",
            "redux": "^4.0.0",
            "redux-devtools-extension": "^2.13.2",
            "redux-thunk": "^2.2.0",
            "reselect": "^3.0.1",
            "semantic-ui-css": "^2.3.1",
            "semantic-ui-react": "^0.80.0",
            "uuid": "^3.2.1",
            "validator": "^9.4.1"
            </p>

            <b>Backend</b>
                <p>
                "babel-cli": "^6.26.0",
                "babel-plugin-transform-object-rest-spread": "^6.26.0",
                "babel-preset-env": "^1.7.0",
                "bcrypt": "^2.0.1",
                "bluebird": "^3.5.1",
                "body-parser": "^1.18.3",
                "dotenv": "^5.0.1",
                "express": "^4.16.3",
                "gridfs-stream": "^1.1.1",
                "jsonwebtoken": "^8.2.1",
                "mongoose": "^5.1.1",
                "mongoose-unique-validator": "^2.0.1",
                "morgan": "^1.9.0",
                "multer": "^1.3.0",
                "multer-gridfs-storage": "^3.0.1",
                "nodemailer": "^4.6.4"
                </p>
        </Segment>

    </div>
);

export default Event;