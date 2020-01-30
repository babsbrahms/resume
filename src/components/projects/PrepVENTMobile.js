import React from 'react';
import {Segment, Divider} from 'semantic-ui-react';
import AddProject from "../AddProject"


const pages=[
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/prepvent_invite_mobile%2F12.png?alt=media&token=5000226b-58ab-4e5e-a3b3-620b68bedc18',
        name: 'Edit Invite'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/prepvent_invite_mobile%2F13.png?alt=media&token=f1cada97-0178-4cce-864c-6aff514ecc52',
        name: 'Home'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/prepvent_invite_mobile%2F16.png?alt=media&token=9eb9cf75-bd58-4149-99a5-5872f7095439',
        name: 'Invitation letter'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/prepvent_invite_mobile%2F6.png?alt=media&token=2d54e5f3-4c9e-4109-a360-c2b80ea1fd23',
        name: 'Edit Invite'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/prepvent_invite_mobile%2F7.png?alt=media&token=18cdca9f-f2c7-465b-a32e-643951b1f322',
        name: 'Share'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/ib-resume.appspot.com/o/prepvent_invite_mobile%2FAttachment-1.jpeg?alt=media&token=d7d25d20-568c-417c-b1bd-367e68ff5be3',
        name: 'Editor'
    },
];

const title = 'PrepVENT Invite';

const summary = "This is mobile app use to create, edit and share invitation letter and event poster. It is available on android and ios.";

const PrepVENTMobile = () => (
    <div>
        <AddProject title={title} summary={summary} pages={pages} enlarge={false} link={'https://vb-prepvent.firebaseapp.com/'}/>
        <Segment>
        <em>some technologies and packages used</em>
            <ul>
                <li> <b>React native, Firebase, React navigation</b></li>

                <li> <b>react-native-image-cache-wrapper</b>: The camera module is use to take pictures in the app. </li>
                
                <li> <b>react-native-image-picker</b>: It used to select images for psoter design </li>

                <li> <b>react-native-status-bar-height</b>: This module is use to get the height of status bar for mobile devices  </li>
                
            </ul>

            <Divider/>
            <em>Other packages used</em>
            <br/>
            <p>
            "moment": "^2.23.0",
            "react": "16.8.3",
            "react-native": "0.59.8",
            "react-native-color": "^0.0.10",
            "react-native-communications": "^2.2.1",
            "react-native-datepicker": "^1.7.2",
            "react-native-firebase": "5.5.6",
            "react-native-image-cache-wrapper": "^1.0.6",
            "react-native-image-picker": "^0.28.1",
            "react-native-linear-gradient": "^2.5.6",
            "react-native-render-html": "^4.1.2",
            "react-native-share": "1.2.1",
            "react-native-slider": "^0.11.0",
            "react-native-status-bar-height": "^2.2.0",
            "react-native-vector-icons": "^6.0.2",
            "react-native-view-shot": "^2.6.0",
            "react-navigation": "2.12.1",
            "react-redux": "^6.0.0",
            "redux": "^4.0.1",
            "redux-persist": "^5.10.0",
            "redux-thunk": "^2.3.0",
            "rn-fetch-blob": "^0.10.15"
            </p>


        </Segment>

    </div>
);

export default PrepVENTMobile;