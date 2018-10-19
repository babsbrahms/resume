import React from 'react';
import {Segment, Divider} from 'semantic-ui-react';
import AddProject from "../AddProject"


const pages=[
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(8).png?alt=media&token=da32216a-0941-4280-b589-ffefa50576dd',
        name: 'Home Page'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(16).png?alt=media&token=bb021b52-31b3-456b-9ca4-37f607312c5a',
        name: 'Shop'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(17).png?alt=media&token=5fc18a8a-3e17-498d-b48a-102285f1ec6a',
        name: 'Shop Products'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(18).png?alt=media&token=f8eccc34-0216-4e63-acf8-da5b96550cf0',
        name: 'Shopping Cart'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(37).png?alt=media&token=e8261400-7328-47e9-a04d-46e0c87eef32',
        name: 'Checkout'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(38).png?alt=media&token=8fb561b9-0dd5-4c59-b4b9-d3e354d93eb0',
        name: 'Profile 1'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(39).png?alt=media&token=8021ec8f-21cb-451a-bb3b-8cbb3ce696b4',
        name: 'Profile 2'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(9).png?alt=media&token=d44c114e-2e4b-4125-8cf5-b16ca728980d',
        name: 'CMS'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(12).png?alt=media&token=759dced2-7026-41ac-8435-ed3288b1d6de',
        name: 'Products'
    },

    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(14).png?alt=media&token=c805ef70-bdb7-4e0e-a1e0-3acd5703b7e5',
        name: 'Order'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(19).png?alt=media&token=e45b1874-eba0-4688-87a3-e89527f5ef8f',
        name: 'Blog'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(20).png?alt=media&token=a2a876a6-f5c3-4a25-b48d-f647f5be7c53',
        name: 'Blog content'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(21).png?alt=media&token=730de675-9502-4e40-ba49-817cf07d4f2d',
        name: 'Blog image and video slide'
    },
]


const title = 'Skincare';

const summary = "I made this app / web site for my sister's store. The app has a shopping section, blog section and a CMS to manage both the shopping and the blog. Furthermore, there is a section for 'production of the week'.In the shopping section, users can filter their searches with the click of a button based on the product categories offered by the store.";

const Skincare = () => (
    <div>
        <AddProject title={title} summary={summary} pages={pages} enlarge />
        <Segment>
        <em>some technologies and packages used</em>
        <ul>
            <li> <b>nodejs, express, MongoDB, socket.io, passport</b></li>

            <li> <b>multer</b>: I used multer to upload files to my web application. It allowed me to upload single file, array of files and fields (i.e. uploading image(s) and video(s) to the same route) to a directory in my app. </li>

            <li> <b> rave</b>: I used rave by flutterwave to handle customers payment. After every succesful payment, it returns a transaction ID to identify the transaction in the rave dashbord. Furthermore, I can refund customers account and see customer's past transactions. </li>

            <li> <b>csurf</b>: csurf was use for security since the app deals with money payment. A token is generted via form submission and it is validated in every request to grant access to the route.</li>

            <li> <b>unirest</b>:  For making cross-origin HTTP requests.</li>

            <li> <b>nodemailer</b>: I used nodemailer to send welcome messages and order messages to customers. In reset password, I used nodemailer to send mail while socket.io notifies customers on the status of their mail. </li>

            <li> <b>jsonwebtoken</b>: I used jwt for authenication in the content Management system (CMS) part of the application. A token generated if the user provides the right credentials and it is verified in every route before access is granted to the route.</li>
                
            <li> <b>twitter bootstrap</b>: CSS framework for styling the ejs template view on the client side of the app.</li>
        </ul>

        <Divider/>
        <em>Other packages used</em>
        <p>
        "bcrypt-nodejs": "0.0.3",
        "body-parser": "~1.18.2",
        "connect-flash": "^0.1.1",
        "connect-mongo": "^2.0.1",
        "cookie-parser": "~1.4.3",
        "csurf": "^1.9.0",
        "debug": "~2.6.9",
        "ejs": "~2.5.7",
        "express": "~4.15.5",
        "express-session": "^1.15.6",
        "express-validator": "^5.0.1",
        "jsonwebtoken": "^8.2.0",
        "mongoose": "^5.0.7",
        "morgan": "~1.9.0",
        "multer": "^1.3.0",
        "nexmo": "^2.2.0",
        "nodemailer": "^4.6.2",
        "passport": "^0.4.0",
        "passport-local": "^1.0.0",
        "serve-favicon": "~2.4.5",
        "socket.io": "^2.0.4",
        "stripe": "^5.5.0",
        "unirest": "^0.5.1",
        "uuid": "^3.2.1"
        </p>

        </Segment>

    </div>
);

export default Skincare;