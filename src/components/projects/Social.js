import React from 'react';
import {Segment, Divider} from 'semantic-ui-react';
import AddProject from "../AddProject"

const pages =[];

const title = 'Social';

const summary = 'I am currently working on a new social-media project that utilizes react native ...';

const Social = () => (
    <div>
    <AddProject title={title} summary={summary} pages={pages}  />
        <Segment>
        <em>some technologies and packages used</em>
        <ul>
            <li> <b>React-native</b>: It allowed me to write react codes for platform specific operating system (ios and android). It also allows for code sharing within the app for the respective platforms. It is like react without the HTML syntax and some JavaScript syntax. </li>

            <li> <b>React-navigation</b>: For navigation between the screens within the app. </li>

            <li> <b>Firebase </b>: Use firebase for authenication, storage and database </li>
        </ul>
        <Divider/>
        <em>Other packages used</em>
        <p>will be updated soon...</p>
        
        </Segment>

    </div>
);

export default Social;