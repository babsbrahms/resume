import React from 'react';
import {Segment, Divider} from 'semantic-ui-react';
import AddProject from "../AddProject"


const pages=[
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/home.png?alt=media&token=551aaa7e-7836-4935-b1d7-bcc1f010f4c1',
        name: 'Home'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/comment.png?alt=media&token=8b0313b0-7946-4b28-b1c4-b5357a19ea2c',
        name: 'Comment'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/map.png?alt=media&token=8cb9a08f-b972-4b50-8be9-ffb3746d47ee',
        name: 'Map'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/public.png?alt=media&token=7463a2c7-0bde-4e07-a474-129ff4d09e45',
        name: 'Public'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/settings.png?alt=media&token=4e67e3c9-1f33-4b87-ade3-3f6f895160b2',
        name: 'Settings'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/wallet.png?alt=media&token=e2d2ebf6-035f-4ba7-b8fd-de8d11e176a0',
        name: 'Wallet'
    },
];

const title = 'e-vent';

const summary = "This is a mobile app which allow users to plan their events and share it with other users. I utilizes google api to share events location. It works on both ios and android";

const EventMobile = () => (
    <div>
        <AddProject title={title} summary={summary} pages={pages} enlarge={false}/>
        <Segment>
        <em>some technologies and packages used</em>
            <ul>
                <li> <b>React native, Firebase, React navigation</b></li>

                <li> <b>react-native-camera</b>: The camera module is use to take pictures in the app. </li>
                
                <li> <b>react-native-maps</b>: It uses google maps on Android and the native map on ios </li>

                <li> <b>redux-persist</b>: Redux-persist is use for storing data in the Asyncstorage  </li>
                
            </ul>

            <Divider/>
            <em>Other packages used</em>
            <br/>
            <p>
            "moment": "^2.23.0",
            "react": "16.5.0",
            "react-native": "0.57.1",
            "react-native-calendars": "^1.21.0",
            "react-native-camera": "^1.6.4",
            "react-native-datepicker": "^1.7.2",
            "react-native-maps": "^0.22.1",
            "react-native-status-bar-height": "^2.2.0",
            "react-native-vector-icons": "^6.0.2",
            "react-navigation": "2.12.1",
            "react-redux": "^6.0.0",
            "redux": "^4.0.1",
            "redux-devtools-extension": "^2.13.7",
            "redux-persist": "^5.10.0",
            "redux-thunk": "^2.3.0"
            "babel-eslint": "^10.0.1",
            "babel-jest": "23.6.0",
            "babel-preset-flow": "^6.23.0",
            "eslint": "^5.9.0",
            "eslint-config-airbnb": "^17.1.0",
            "eslint-plugin-flowtype": "^3.2.0",
            "eslint-plugin-import": "^2.14.0",
            "eslint-plugin-jsx-a11y": "^6.1.2",
            "eslint-plugin-react": "^7.11.1",
            "eslint-plugin-react-native": "^3.5.0",
            "flow-bin": "0.78.0",
            "jest": "23.6.0",
            "metro-react-native-babel-preset": "0.49.1",
            "prop-types": "^15.6.2",
            "react-test-renderer": "16.5.0"
            </p>


        </Segment>

    </div>
);

export default EventMobile;