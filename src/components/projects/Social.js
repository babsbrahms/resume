import React from 'react';
import {Segment, Divider} from 'semantic-ui-react';
import AddProject from "../AddProject"

const pages =[
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(43).png?alt=media&token=4c41fca3-ceeb-489c-9189-3a71d5912503',
        name: 'Dashboard'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(44).png?alt=media&token=aca9d707-5d8b-46eb-a0d0-d7bf431cf708',
        name: 'Streaming'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(45).png?alt=media&token=16fabec1-967c-4172-8e8d-09ab837b8f49',
        name: 'Chat History'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(46).png?alt=media&token=e37b0b45-30c7-4989-b6e0-f53b158cb3ba',
        name: 'Search'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(47).png?alt=media&token=2209b576-bfcf-4ddd-9a18-e73e1e743706',
        name: 'Settings'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(48).png?alt=media&token=a82493d2-b597-454e-ab8f-ab313959b9cd',
        name: 'Contact'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(49).png?alt=media&token=31c75769-f2ee-48a4-94ec-5d0a6ec2b28a',
        name: 'Profile'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(50).png?alt=media&token=4d02b245-d86a-46d5-bf62-b933ed758d71',
        name: 'Chat'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(57).png?alt=media&token=d6f920e9-7418-4601-8b9e-a58c739356cf',
        name: 'Authenicate'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(58).png?alt=media&token=98d94682-bc52-488b-8566-3b735a9f6592',
        name: 'Sign Up'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(52).png?alt=media&token=ac25f0e4-22ab-47a8-a24d-fb4fc7c802af',
        name: 'Loading'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(54).png?alt=media&token=6450ffad-7b12-4f77-95cd-978e7f3c588d',
        name: 'Camera'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(55).png?alt=media&token=54770997-41ec-4fdd-8155-699669151be7',
        name: 'Images'
    }
];


const title = 'Social';

const summary = "Social is a react-native project that allows users to post pictures/videos and chat with other users. It uses firebase services and I used react-native apis like Animated, PanResponder and Dimension to make jesture animations. It only works on Android currently. ";

const Social = () => (
    <div>
    <AddProject title={title} summary={summary} pages={pages} enlarge={false} />
        <Segment>
        <em>some technologies and packages used</em>
        <ul>
            <li> <b>React-native</b>: It allowed me to write react codes for platform specific operating system (ios and android). It also allows for code sharing within the app for the respective platforms. It is like react without the HTML syntax and some JavaScript syntax. </li>

            <li> <b>React-navigation</b>: For navigation between the screens within the app. </li>

            <li> <b>react-native-camera</b> : I used it to take users picture and send the pictures to firebase storage so that they could be use in the user's profile</li>
            <li> 
                <b>firebase </b>: I used firebase to authenicate user and users data are store in firebase's firestore and realtime database. 
                    I used cloud function to make complex requests. 
                    Later, I will use firebase cloud messagingtogether with react-native-push-notification to send push-notifications to users.
                
            </li>
            
            <li> <b>redux-persist </b>: I used this package to save users data in storage (AsycStorage) so that i can retrieve them and using it together with redux when I am offline.</li>
            

        </ul>
        <Divider/>
        <em>Other packages used</em>
        <p>
            "firebase": "^5.4.1",
            "react": "16.3.1",
            "react-native": "0.55.4",
            "react-native-camera": "^1.2.0",
            "react-native-camera-kit": "^6.2.6",
            "react-native-google-signin": "^1.0.0-rc3",
            "react-native-vector-icons": "^5.0.0",
            "react-navigation": "^2.12.1",
            "react-redux": "^5.0.7",
            "redux": "^4.0.0",
            "redux-persist": "^5.10.0",
            "redux-thunk": "^2.3.0",
            "uuid": "^3.3.2",
            "validator": "^10.7.0"
        </p>
        
        </Segment>

    </div>
);

export default Social;